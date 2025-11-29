import type { DefineComponent } from 'vue'

// Component type definitions
export interface AvatarProps {
  src?: string
  alt?: string
  size?: 'small' | 'medium' | 'large'
  shape?: 'circle' | 'square'
}

export interface BadgeProps {
  text?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
}

export interface DatePickerProps {
  modelValue?: Date | string
  placeholder?: string
  disabled?: boolean
  format?: string
}

export interface ModalCardProps {
  modelValue?: boolean
  title?: string
  width?: string
  closeOnOverlayClick?: boolean
}

export interface SearchInputProps {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
}

export interface SnackBarProps {
  modelValue?: boolean
  message?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

// Component exports
export declare const Avatar: DefineComponent<AvatarProps>
export declare const Badge: DefineComponent<BadgeProps>
export declare const Button: DefineComponent<ButtonProps>
export declare const CloseAction: DefineComponent
export declare const ColorPalette: DefineComponent
export declare const ColorSwatch: DefineComponent
export declare const ContentArea: DefineComponent
export declare const Control: DefineComponent
export declare const ControlLine: DefineComponent
export declare const ControlTile: DefineComponent
export declare const DatePicker: DefineComponent<DatePickerProps>
export declare const HexColorInput: DefineComponent
export declare const Icon: DefineComponent
export declare const IconColorPicker: DefineComponent
export declare const IconGrid: DefineComponent
export declare const ModalCard: DefineComponent<ModalCardProps>
export declare const ModalFooter: DefineComponent
export declare const ModalHeader: DefineComponent
export declare const SearchInput: DefineComponent<SearchInputProps>
export declare const SnackBar: DefineComponent<SnackBarProps>
