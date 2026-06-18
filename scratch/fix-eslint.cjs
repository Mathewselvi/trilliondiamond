const fs = require('fs');
const glob = require('glob'); // use standard fs if glob not avail, but we can just pass files

const files = [
    'src/components/layout/Layout.jsx',
    'src/components/layout/Navbar.jsx',
    'src/components/ui/Loader.jsx',
    'src/components/ui/ProductCard.jsx',
    'src/components/ui/ScrollToTopButton.jsx',
    'src/pages/About.jsx',
    'src/pages/Contact.jsx',
    'src/pages/Customization.jsx',
    'src/pages/Home.jsx',
    'src/pages/Products.jsx',
    'src/pages/Terms.jsx'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if motion is used (other than import)
    const matches = content.match(/motion\./g);
    const used = matches && matches.length > 0;
    
    if (!used) {
        // Remove motion from import { motion, AnimatePresence } or import { motion }
        content = content.replace(/import\s+\{\s*motion\s*,\s*AnimatePresence\s*\}\s+from\s+['"]framer-motion['"];?/, "import { AnimatePresence } from 'framer-motion';");
        content = content.replace(/import\s+\{\s*AnimatePresence\s*,\s*motion\s*\}\s+from\s+['"]framer-motion['"];?/, "import { AnimatePresence } from 'framer-motion';");
        content = content.replace(/import\s+\{\s*motion\s*\}\s+from\s+['"]framer-motion['"];?\n?/, "");
        content = content.replace(/,\s*motion\b/, "");
        content = content.replace(/\bmotion\s*,\s*/, "");
        fs.writeFileSync(file, content);
        console.log("Fixed motion in", file);
    }
});
