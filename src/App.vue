<script setup lang="ts">
import { ref } from 'vue'
import ModalCard from './components/ModalCard.vue'
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import SegmentedControl from './components/SegmentedControl.vue'

// SegmentedControl test data
const selectedValue = ref('company')
const selectedValueWithDropdown = ref('direct-reports')
const dropdownValue = ref('')

const segmentedItems = [
  { label: 'Company', value: 'company' },
  { label: 'My', value: 'my' }
]

const segmentedItemsWithDropdown = [
  { label: 'Company', value: 'company' },
  { 
    label: 'Direct reports', 
    value: 'direct-reports',
    dropdown: true,
    dropdownOptions: [
      { label: 'Direct reports', value: 'direct-reports' },
      { label: 'Indirect reports', value: 'indirect-reports' },
      { label: 'All reports', value: 'all-reports' }
    ]
  },
  { label: 'My', value: 'my' }
]

const handleValueChange = (value: string) => {
  console.log('Value changed to:', value)
  selectedValue.value = value
}

const handleValueChangeWithDropdown = (value: string) => {
  console.log('Value with dropdown changed to:', value)
  selectedValueWithDropdown.value = value
}

const handleDropdownChange = (value: string) => {
  console.log('Dropdown value changed to:', value)
  dropdownValue.value = value
}


</script>

<template>
  <div id="app">
    <header class="app-header">
      <h1>Design System Components</h1>
      <p>Vue.js + TypeScript + Figma Integration</p>
    </header>

    <main class="app-main">
      <!-- Icon Test Section -->
      <section class="showcase-section">
        <h2>Icon Component Test</h2>
        <div class="icon-test">
          <div class="test-item">
            <h3>Direct Icon Component</h3>
            <Icon icon="fa-solid fa-user" size="md" />
            <Icon icon="fa-solid fa-check" size="md" />
            <Icon icon="fa-solid fa-times" size="md" />
          </div>
          <div class="test-item">
            <h3>Button with Icons</h3>
            <Button icon="user" label="User" />
            <Button icon="check" label="Check" />
            <Button icon="times" label="Times" />
          </div>
        </div>
      </section>

      <!-- Button Showcase -->
      <section class="showcase-section">
        <h2>Button Component Variants</h2>
        <div class="button-showcase">
          <div class="button-group">
            <h3>Variants</h3>
            <div class="button-row">
              <Button variant="primary" label="Primary" />
              <Button variant="secondary" label="Secondary" />
              <Button variant="ghost" label="Ghost" />
              <Button variant="dark" label="Dark" />
              <Button variant="white" label="White" />
              <Button variant="destructive" label="Destructive" />
            </div>
          </div>
          
          <div class="button-group">
            <h3>Sizes</h3>
            <div class="button-row">
              <Button size="xs" label="XS" />
              <Button size="sm" label="Small" />
              <Button size="md" label="Medium" />
              <Button size="lg" label="Large" />
            </div>
          </div>
          
          <div class="button-group">
            <h3>With Icons</h3>
            <div class="button-row">
              <Button icon="fa-solid fa-plus" label="Add" />
              <Button icon="fa-solid fa-arrow-right" label="Continue" iconPosition="right" />
              <Button icon="fa-solid fa-gear" label="" />
            </div>
          </div>
          
          <div class="button-group">
            <h3>States</h3>
            <div class="button-row">
              <Button state="default" label="Default" />
              <Button state="hover" label="Hover" />
              <Button state="active" label="Active" />
              <Button state="pressed" label="Pressed" />
              <Button state="disabled" label="Disabled" />
            </div>
          </div>
        </div>
      </section>

      <!-- SegmentedControl Test -->
      <section class="showcase-section">
        <h2>SegmentedControl Component Test</h2>
        <div class="segmented-control-test">
          <div class="test-item">
            <h3>Basic SegmentedControl</h3>
            <SegmentedControl 
              :modelValue="selectedValue"
              :items="segmentedItems"
              @update:modelValue="(value) => { selectedValue = value; }"
            />
            <p>Selected: {{ selectedValue }}</p>
          </div>
          
          <div class="test-item">
            <h3>With Dropdown</h3>
            <SegmentedControl 
              :modelValue="selectedValueWithDropdown"
              :items="segmentedItemsWithDropdown"
              @update:modelValue="(value) => { selectedValueWithDropdown = value; }"
              @dropdown-change="handleDropdownChange"
            />
            <p>Selected: {{ selectedValueWithDropdown }}</p>
            <p>Dropdown Value: {{ dropdownValue }}</p>
          </div>
        </div>
      </section>

      <!-- Modal Showcase -->
      <section class="showcase-section">
        <h2>Modal Card Component</h2>
        <div class="modal-showcase">
          <div class="modal-grid">
            <div class="modal-item">
              <h3>Small Modal</h3>
              <ModalCard 
                size="s"
                title="Small Modal"
                description="This is a small modal example."
                :contentArea="true"
              />
            </div>
            
            <div class="modal-item">
              <h3>Medium Modal</h3>
              <ModalCard 
                size="m"
                title="Medium Modal"
                description="This is a medium modal example."
                :contentArea="true"
              />
            </div>
            
            <div class="modal-item">
              <h3>Large Modal</h3>
              <ModalCard 
                size="l"
                title="Large Modal"
                description="This is a large modal example."
                :contentArea="true"
              />
            </div>
          </div>
          
          <div class="modal-grid">
            <div class="modal-item">
              <h3>Success Modal</h3>
              <ModalCard 
                status="success"
                title="Success Modal"
                description="Operation completed successfully!"
                :contentArea="false"
              />
            </div>
            
            <div class="modal-item">
              <h3>Modal with Badge</h3>
              <ModalCard 
                title="Modal with Badge"
                description="This modal shows a badge next to the title."
                :showBadge="true"
                badgeLabel="New"
                badgeColor="Blue"
                badgeEmphasis="Low"
                :contentArea="false"
              />
            </div>
            
            <div class="modal-item">
              <h3>High Emphasis Badge</h3>
              <ModalCard 
                title="Important Modal"
                description="This modal shows a high emphasis badge."
                :showBadge="true"
                badgeLabel="Important"
                badgeColor="Red"
                badgeEmphasis="High"
                :contentArea="false"
              />
            </div>
            
            <div class="modal-item">
              <h3>Modal with Button Icons</h3>
              <ModalCard 
                title="Modal with Icons"
                description="This modal shows buttons with icons."
                leftButtonIcon="times"
                leftButtonIconPosition="left"
                rightButton1Icon="gear"
                rightButton1IconPosition="left"
                :rightButton1="true"
                rightButton2Icon="check"
                rightButton2IconPosition="left"
                :contentArea="false"
              />
            </div>
            
            <div class="modal-item">
              <h3>Modal with Right Icons</h3>
              <ModalCard 
                title="Modal with Right Icons"
                description="This modal shows buttons with icons on the right."
                leftButtonIcon="arrow-left"
                leftButtonIconPosition="left"
                rightButton1Icon="download"
                rightButton1IconPosition="right"
                :rightButton1="true"
                rightButton2Icon="arrow-right"
                rightButton2IconPosition="right"
                :contentArea="false"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: 'Inter', sans-serif;
}

.app-header {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

.app-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.app-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.app-main {
  max-width: 1400px;
  margin: 0 auto;
}

.showcase-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.showcase-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 24px;
  text-align: center;
}

.button-showcase {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.button-group h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 16px;
}

.button-row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.modal-showcase {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.modal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.modal-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 16px;
  text-align: center;
}

.icon-test {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

.segmented-control-test {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

.test-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.test-item h3 {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.test-item > * {
  margin: 0;
}

.test-item p {
  font-size: 12px;
  color: #666;
  margin: 4px 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  
  .showcase-section {
    padding: 24px;
  }
  
  .button-row {
    justify-content: center;
  }
  
  .modal-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  #app {
    padding: 16px;
  }
  
  .app-header h1 {
    font-size: 1.8rem;
  }
  
  .showcase-section {
    padding: 20px;
  }
  
  .button-row {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
