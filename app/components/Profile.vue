<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Profile"/>
        </ActionBar>
        <StackLayout class="content" iosOverflowSafeArea="true"></StackLayout>
    </Page>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.content {
    background-image: url("~/img/page-background@3x.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
}
</style>
