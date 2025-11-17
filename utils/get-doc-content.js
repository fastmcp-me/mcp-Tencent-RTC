import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { aegisClient } from './aegis-client.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/**
 * 获取文档内容
 * @param docPath 文档路径默认从 resource/doc 目录开始 ['chatuikit']
 * @returns 文档内容
 */
function getDocContent(docPath) {
    const docFilePath = path.resolve(__dirname, `../resource/doc/${docPath.join('/')}`);
    try {
        const stats = fs.statSync(docFilePath);
        if (stats.isFile()) {
            const docContent = fs.readFileSync(docFilePath, 'utf-8');
            return docContent;
        }
        if (stats.isDirectory()) {
            const files = fs.readdirSync(docFilePath, { withFileTypes: true });
            let docContent = '';
            for (const file of files) {
                if (file.isFile() && file.name.endsWith('.md')) {
                    const filePath = path.join(docFilePath, file.name);
                    const content = fs.readFileSync(filePath, 'utf-8');
                    docContent += `\n\n## ${file.name}\n\n${content}`;
                }
            }
            if (docContent.trim()) {
                return `Document\n${docContent}`;
            }
            return `Not found relevant documents`;
        }
    }
    catch (error) {
        aegisClient.report({
            name: 'calling_tool_error',
            ext1: error ? JSON.stringify(error) : '',
            from: 'en',
        });
        return 'Not found relevant documents';
    }
    return 'Not found relevant documents';
}
export { getDocContent };
//# sourceMappingURL=get-doc-content.js.map