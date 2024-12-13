<template>
    <MinimalHeader />
    <div class="d-flex">
        <MyAccountSideNavBar />
        
        <component :is="currentComponent" :id="containerId" @change-main-component="changeMainComponent" />
    </div>
</template>

<script>
import MinimalHeader from '../components/MinimalHeader.vue';
import MyAccountSideNavBar from '../components/MyAccountSideNavBar.vue';
import MyStorageDashboard from '@/components/MyStorageDashboard.vue';
import MyStorageCreateContainer from '@/components/MyStorageCreateContainer.vue';
import MyStorageContainerDashboard from '@/components/MyStorageContainerDashboard.vue';
import MyStorageContainer from '@/components/MyStorageContainer.vue';
import MyStorageContainerUpload from '@/components/MyStorageContainerUpload.vue';

export default {
    name: "MyStorage",
    components: {
        MinimalHeader,
        MyAccountSideNavBar,
        MyStorageDashboard,
        MyStorageCreateContainer,
        MyStorageContainerDashboard,
        MyStorageContainer,
        MyStorageContainerUpload,
    },
    data() {
        return {
            currentComponent: 'MyStorageDashboard',
            containerId: null,
        }
    },
    methods: {
        changeMainComponent(newComponent, containerId) {
            if(containerId) {
                this.containerId = containerId;
                this.currentComponent = `${newComponent}`;
                this.currentContainerId = containerId;
            }
            else {
                this.currentComponent = newComponent;
            }
        },
    }
}
</script>