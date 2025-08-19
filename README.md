# MCP Design System Storybook

A comprehensive design system built with Vue 3, TypeScript, and Storybook, featuring the ModalCard component extracted from Figma designs with **perfect responsiveness** and **atom-based architecture**.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
# Start the development server
npm run dev

# Start Storybook
npm run storybook

# Build the project
npm run build

# Build Storybook
npm run build-storybook
```

## 📦 Components

### ModalCard Component

A comprehensive modal card component with **perfect responsiveness**, multiple variants, and atom-based architecture built with exact Figma design specifications.

#### ✅ **Fixed Issues**
- **Responsiveness**: No more cropping - modal adapts perfectly to viewport
- **Size Prop**: Now works correctly with proper responsive behavior
- **Width Issues**: Fixed with proper max-width and responsive breakpoints
- **Type Prop**: Added comprehensive type system
- **Atom Components**: Header and Footer extracted as reusable atoms
- **Prop Discrepancies**: All Storybook controls now match rendered content

#### Features
- **Multiple Sizes**: Small (s), Medium (m), Large (l) with responsive behavior
- **Status Variants**: Default, Success, Warning, Info, Error
- **Type System**: Default, Form, Confirmation, Information, Warning, Error
- **Flexible Content**: Optional content area with different types
- **Button Configuration**: Configurable left and right buttons
- **Atom Architecture**: Header and Footer as separate reusable components
- **Perfect Responsiveness**: No cropping, adapts to all screen sizes
- **Accessibility**: Built with accessibility in mind
- **Exact Figma Styling**: Pixel-perfect implementation of the design

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headIcon` | `boolean` | `true` | Whether to show the header icon |
| `title` | `string` | `'Modal Title'` | The modal title |
| `description` | `string` | `'This is a description...'` | The modal description |
| `contentArea` | `boolean` | `true` | Whether to show the content area |
| `contentType` | `'inputs' \| 'multi-section' \| 'text' \| 'rich-text' \| 'table'` | `'inputs'` | Type of content area |
| `leftButton` | `boolean` | `true` | Whether to show the left button |
| `leftButtonLabel` | `string` | `'Cancel'` | Label for the left button |
| `leftButtonState` | `'default' \| 'hover' \| 'active' \| 'focus' \| 'disabled'` | `'default'` | State of the left button |
| `rightButton1` | `boolean` | `false` | Whether to show the first right button |
| `rightButton1Label` | `string` | `'Secondary'` | Label for the first right button |
| `rightButton1State` | `'default' \| 'hover' \| 'active' \| 'focus' \| 'disabled'` | `'default'` | State of the first right button |
| `rightButton2` | `boolean` | `true` | Whether to show the second right button |
| `rightButton2Label` | `string` | `'Confirm'` | Label for the second right button |
| `rightButton2State` | `'default' \| 'hover' \| 'active' \| 'focus' \| 'disabled'` | `'default'` | State of the second right button |
| `size` | `'s' \| 'm' \| 'l'` | `'s'` | Size of the modal (now responsive) |
| `status` | `'default' \| 'success' \| 'warning' \| 'info' \| 'error'` | `'default'` | Status/type of the modal |
| `type` | `'default' \| 'form' \| 'confirmation' \| 'information' \| 'warning' \| 'error'` | `'default'` | Type of the modal |
| `closeActionState` | `'default' \| 'hover' \| 'active' \| 'focus' \| 'disabled'` | `'default'` | State of the close action |

#### Usage

```vue
<template>
  <ModalCard
    size="m"
    status="success"
    type="confirmation"
    title="Success Modal"
    description="Operation completed successfully!"
    :contentArea="true"
    contentType="inputs"
    :leftButton="true"
    leftButtonLabel="Cancel"
    :rightButton2="true"
    rightButton2Label="Confirm"
  />
</template>

<script setup>
import ModalCard from './components/ModalCard.vue'
</script>
```

#### Examples

**Basic Modal:**
```vue
<ModalCard 
  title="Basic Modal"
  description="This is a basic modal example."
/>
```

**Success Modal:**
```vue
<ModalCard 
  status="success"
  type="confirmation"
  title="Success!"
  description="Your action was completed successfully."
  rightButton2Label="Continue"
/>
```

**Error Modal:**
```vue
<ModalCard 
  status="error"
  type="error"
  title="Error Occurred"
  description="Something went wrong. Please try again."
  leftButtonLabel="Close"
  rightButton2Label="Retry"
/>
```

**Form Modal:**
```vue
<ModalCard 
  type="form"
  title="User Registration"
  description="Please fill out the form below."
  contentType="inputs"
  rightButton1Label="Save Draft"
  :rightButton1="true"
  rightButton2Label="Submit"
/>
```

**Information Modal:**
```vue
<ModalCard 
  type="information"
  title="Information"
  description="This is an informational message."
  :contentArea="false"
  :leftButton="false"
  rightButton2Label="OK"
/>
```

## 🏗️ Atom Components

### ModalHeader
Reusable header component with icon, title, description, and close action.

### ModalFooter
Reusable footer component with configurable buttons and responsive layout.

### Button
Enhanced button component with proper sizing and responsive behavior.

### Icon
Icon component with status support and FontAwesome integration.

### ContentArea
Content area component with input fields and different content types.

## 🎨 Design System

The ModalCard component follows the design system specifications from Figma:

### Colors
- **Primary Blue**: `#338eea`
- **Success Green**: `#25bd5d`
- **Warning Yellow**: `#e3b212`
- **Error Red**: `#e42e2e`
- **Info Blue**: `#0072e5`
- **Text Dark**: `#000f30`
- **Text Medium**: `#476887`
- **Background Light**: `#f6f9fb`
- **Border Light**: `#e5ecf3`

### Typography
- **Font Family**: Inter
- **Title**: 16px, Semi Bold (600)
- **Description**: 14px, Regular (400)
- **Button Text**: 12px, Semi Bold (600)
- **Label**: 10px, Medium (500)

### Spacing
- **Padding**: 20px (header), 16px (content), 12px (footer)
- **Gap**: 8px (header), 16px (content), 24px (footer)
- **Border Radius**: 10px (modal), 6px (buttons), 4px (icons)

### Responsive Breakpoints
- **Desktop**: max-width based on size (400px, 500px, 600px)
- **Tablet**: max-width calc(100vw - 32px)
- **Mobile**: max-width calc(100vw - 16px)

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── ModalCard.vue          # Main modal component
│   ├── ModalHeader.vue        # Header atom component
│   ├── ModalFooter.vue        # Footer atom component
│   ├── Button.vue             # Button component
│   ├── Icon.vue               # Icon component
│   ├── CloseAction.vue        # Close action component
│   └── ContentArea.vue        # Content area component
├── stories/
│   └── ModalCard.stories.ts   # Storybook stories
└── main.ts                    # App entry point
```

### Adding New Variants

To add new variants to the ModalCard component:

1. Update the TypeScript interfaces in the component
2. Add the new variant logic in the template
3. Add corresponding CSS classes
4. Create Storybook stories for the new variant
5. Update this documentation

## 📱 Responsive Design

The ModalCard component now has **perfect responsiveness**:

- **No Cropping**: Content never extends beyond viewport
- **Adaptive Sizing**: Automatically adjusts to screen size
- **Mobile-First**: Optimized for all device sizes
- **Flexible Layout**: Content flows naturally within constraints

### Responsive Behavior
- **Small (s)**: 400px max-width, adapts to mobile
- **Medium (m)**: 500px max-width, perfect for tablets
- **Large (l)**: 600px max-width, ideal for desktop

## ♿ Accessibility

The ModalCard component includes:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support
- Semantic HTML structure

## 🚀 Deployment

### Storybook Deployment
```bash
npm run build-storybook
npm run deploy-storybook
```

This will build and deploy the Storybook to GitHub Pages.

## 🎯 Key Improvements

### ✅ Fixed Issues
1. **Responsiveness**: Modal now adapts perfectly to any screen size
2. **Size Prop**: Works correctly with proper responsive behavior
3. **Width Issues**: Fixed with proper max-width constraints
4. **Type Prop**: Added comprehensive type system
5. **Atom Architecture**: Header and Footer as separate components
6. **Prop Consistency**: All Storybook controls match rendered content
7. **No Cropping**: Content never extends beyond viewport
8. **Mobile Optimization**: Perfect display on all devices

### 🆕 New Features
- **Type System**: Form, Confirmation, Information, Warning, Error types
- **Atom Components**: Reusable Header and Footer components
- **Enhanced Responsiveness**: Perfect adaptation to all screen sizes
- **Improved Button Sizing**: Proper minimum sizes and responsive behavior
- **Better Storybook Stories**: All variants properly documented

## 📄 License

This project is licensed under the MIT License.
