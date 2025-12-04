import type { App } from 'vue'

// Import FontAwesome CSS (Free version)
import '@fortawesome/fontawesome-free/css/all.css'

// Import all components
import Avatar from './components/Avatar.vue'
import Badge from './components/Badge.vue'
import Banner from './components/Banner.vue'
import Button from './components/Button.vue'
import CloseAction from './components/CloseAction.vue'
import ColorPalette from './components/ColorPalette.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import ContentArea from './components/ContentArea.vue'
import Control from './components/Control.vue'
import ControlLine from './components/ControlLine.vue'
import ControlTile from './components/ControlTile.vue'
import DatePicker from './components/DatePicker.vue'
import ErrorBanner from './components/ErrorBanner.vue'
import HexColorInput from './components/HexColorInput.vue'
import Icon from './components/Icon.vue'
import IconColorPicker from './components/IconColorPicker.vue'
import IconGrid from './components/IconGrid.vue'
import InfoBanner from './components/InfoBanner.vue'
import Kbd from './components/Kbd.vue'
import KbdAtom from './components/KbdAtom.vue'
import KbdConnector from './components/KbdConnector.vue'
import ModalCard from './components/ModalCard.vue'
import ModalFooter from './components/ModalFooter.vue'
import ModalHeader from './components/ModalHeader.vue'
import PromoBanner from './components/PromoBanner.vue'
import SearchInput from './components/SearchInput.vue'
import SegmentItem from './components/SegmentItem.vue'
import SegmentedControl from './components/SegmentedControl.vue'
import SnackBar from './components/SnackBar.vue'
import SuccessBanner from './components/SuccessBanner.vue'
import TimeTracker from './components/TimeTracker.vue'
import WarningBanner from './components/WarningBanner.vue'

// Import styles
import './style.css'

// Export all components
export {
  Avatar,
  Badge,
  Banner,
  Button,
  CloseAction,
  ColorPalette,
  ColorSwatch,
  ContentArea,
  Control,
  ControlLine,
  ControlTile,
  DatePicker,
  ErrorBanner,
  HexColorInput,
  Icon,
  IconColorPicker,
  IconGrid,
  InfoBanner,
  Kbd,
  KbdAtom,
  KbdConnector,
  ModalCard,
  ModalFooter,
  ModalHeader,
  PromoBanner,
  SearchInput,
  SegmentItem,
  SegmentedControl,
  SnackBar,
  SuccessBanner,
  TimeTracker,
  WarningBanner
}

// Create plugin for Vue app installation
export default {
  install: (app: App) => {
    app.component('Avatar', Avatar)
    app.component('Badge', Badge)
    app.component('Banner', Banner)
    app.component('Button', Button)
    app.component('CloseAction', CloseAction)
    app.component('ColorPalette', ColorPalette)
    app.component('ColorSwatch', ColorSwatch)
    app.component('ContentArea', ContentArea)
    app.component('Control', Control)
    app.component('ControlLine', ControlLine)
    app.component('ControlTile', ControlTile)
    app.component('DatePicker', DatePicker)
    app.component('ErrorBanner', ErrorBanner)
    app.component('HexColorInput', HexColorInput)
    app.component('Icon', Icon)
    app.component('IconColorPicker', IconColorPicker)
    app.component('IconGrid', IconGrid)
    app.component('InfoBanner', InfoBanner)
    app.component('Kbd', Kbd)
    app.component('KbdAtom', KbdAtom)
    app.component('KbdConnector', KbdConnector)
    app.component('ModalCard', ModalCard)
    app.component('ModalFooter', ModalFooter)
    app.component('ModalHeader', ModalHeader)
    app.component('PromoBanner', PromoBanner)
    app.component('SearchInput', SearchInput)
    app.component('SegmentItem', SegmentItem)
    app.component('SegmentedControl', SegmentedControl)
    app.component('SnackBar', SnackBar)
    app.component('SuccessBanner', SuccessBanner)
    app.component('TimeTracker', TimeTracker)
    app.component('WarningBanner', WarningBanner)
  }
}
