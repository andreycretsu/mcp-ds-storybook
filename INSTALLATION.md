# Quick Installation Guide

## 🚀 Install the Package

```bash
npm install @your-org/vue-design-system
```

## 📦 Usage Options

### Option 1: Global Installation (All Components)
```javascript
import { createApp } from 'vue'
import VueDesignSystem from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

const app = createApp(App)
app.use(VueDesignSystem)
app.mount('#app')
```

### Option 2: Individual Components
```javascript
import { Button, Avatar, Badge } from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

export default {
  components: {
    Button,
    Avatar,
    Badge
  }
}
```

## 🎯 Quick Example

```vue
<template>
  <div>
    <Button variant="primary" size="medium">Click me</Button>
    <Avatar src="/avatar.jpg" alt="User" size="large" />
    <Badge text="New" variant="success" />
  </div>
</template>
```

## 📚 Available Components

| Component | Description |
|-----------|-------------|
| Avatar | User profile images |
| Badge | Status indicators |
| Button | Interactive buttons |
| DatePicker | Date selection |
| ModalCard | Modal dialogs |
| SearchInput | Search fields |
| SnackBar | Notifications |
| ...and 13 more! | |

## 🔧 Requirements

- Vue 3.x
- Node.js 16+ (for installation)

## 📖 Full Documentation

See `README.md` for complete documentation with all component props and examples.
