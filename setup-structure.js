// setup-structure.js
const fs = require('fs').promises;
const path = require('path');

async function createFile(filePath, content = '') {
    try {
        await fs.writeFile(filePath, content);
        console.log(`Created file: ${filePath}`);
    } catch (error) {
        console.error(`Error creating file: ${filePath}`, error);
    }
}

async function createDirectory(dirPath) {
    try {
        await fs.mkdir(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    } catch (error) {
        console.error(`Error creating directory: ${dirPath}`, error);
    }
}

async function setupProjectStructure() {
    const srcPath = path.join(process.cwd(), 'src');
    
    // Define the structure
    const structure = {
        'app': {
            '(auth)': {
                'login': ['page.tsx', 'loading.tsx', 'error.tsx'],
                'register': ['page.tsx', 'loading.tsx', 'error.tsx'],
                'profile': ['page.tsx', 'loading.tsx', 'error.tsx'],
                'layout.tsx': ''
            },
            '(dashboard)': {
                'page.tsx': '',
                'projects': {
                    'page.tsx': '',
                    '[id]': {
                        'page.tsx': ''
                    },
                    'timeline': { 'page.tsx': '' },
                    'training': { 'page.tsx': '' },
                    'mentorship': { 'page.tsx': '' },
                    'metrics': { 'page.tsx': '' }
                },
                'clients': {
                    'page.tsx': '',
                    '[id]': { 'page.tsx': '' },
                    'crm': { 'page.tsx': '' },
                    'pipeline': { 'page.tsx': '' },
                    'communication': { 'page.tsx': '' }
                },
                'training': {
                    'page.tsx': '',
                    'curriculum': {
                        '[week]': { 'page.tsx': '' }
                    },
                    'assessments': { 'page.tsx': '' },
                    'feedback': { 'page.tsx': '' }
                },
                'revenue': {
                    'page.tsx': '',
                    'tracking': { 'page.tsx': '' },
                    'projections': { 'page.tsx': '' }
                },
                'growth': {
                    'page.tsx': '',
                    'opportunities': { 'page.tsx': '' },
                    'networking': { 'page.tsx': '' }
                }
            },
            'api': {
                'auth': {
                    '[...nextauth]': { 'route.ts': '' }
                },
                'projects': { 'route.ts': '' },
                'trainees': { 'route.ts': '' },
                'clients': { 'route.ts': '' }
            },
            'layout.tsx': '',
            'page.tsx': ''
        },
        'lib': {
            'db.ts': 'export {};',
            'auth.ts': 'export {};',
            'models': {
                'User.ts': 'export {};',
                'Project.ts': 'export {};',
                'Task.ts': 'export {};',
                'Timeline.ts': 'export {};',
                'Training.ts': 'export {};',
                'CRM.ts': 'export {};',
                'Metrics.ts': 'export {};'
            },
            'types': {
                'index.d.ts': 'export {};'
            },
            'utils': {
                'auth.ts': 'export {};',
                'api.ts': 'export {};'
            }
        },
        'components': {
            'ui': {},
            'forms': {},
            'layout': {}
        }
    };

    async function createStructure(basePath, struct) {
        for (const [name, content] of Object.entries(struct)) {
            const currentPath = path.join(basePath, name);
            
            if (typeof content === 'object' && content !== null) {
                await createDirectory(currentPath);
                await createStructure(currentPath, content);
            } else {
                await createFile(currentPath, content);
            }
        }
    }

    // Create src directory
    await createDirectory(srcPath);
    
    // Create the structure
    await createStructure(srcPath, structure);
    
    console.log('Project structure setup completed!');
}

setupProjectStructure().catch(console.error);