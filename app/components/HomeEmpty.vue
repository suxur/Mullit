<template>
    <FlexboxLayout
        class="content-empty"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
    >
        <Image src="~/img/light-bulbs@3x.png" stretch="none"/>
        <Label class="h1 m-t-15" text="No Items!"></Label>
        <Label class="h2 m-20" text="Add some items to get started!"></Label>
    </FlexboxLayout>
</template>

<style lang="scss" scoped>
.content-empty {
    background-image: url("~/img/page-background@3x.png");
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>

