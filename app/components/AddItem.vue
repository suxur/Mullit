<template>
    <FlexboxLayout class="add-item">
        <FlexboxLayout class="add-item-left">
            <StackLayout flexGrow="1">
                <TextField hint="I wish I had..." class="input" v-model="item"></TextField>
                <StackLayout class="hr"></StackLayout>
            </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout class="add-item-right">
            <Button class="btn btn-icon" text.decode="&#xf067;" @tap="addItem"></Button>
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    methods: {
        addItem() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../app-variables";

.add-item {
    height: 60;
    background-color: $orange;
    flex-direction: row;

    &-left {
        flex: 1;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding-left: 15;

        .input {
            color: $white;
            font-family: "Cabin";
            padding: 5;
            placeholder-color: $orange-light;
        }
    }

    &-right {
        justify-content: flex-end;
        align-content: center;
    }
}

.hr {
    height: 2;
    background-color: $white;
}
</style>

