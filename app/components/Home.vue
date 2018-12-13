<template>
    <Page class="page">
        <ActionBar class="action-bar" flat="true">
            <Label class="action-bar-title" text="Home"/>
            <ActionItem @tap="addItem" ios.systemIcon="4" ios.position="right" text="add"/>
        </ActionBar>
        <HomeList v-if="items.length > 0" :items="items"/>
        <HomeEmpty v-else/>
    </Page>
</template>

<script>
import AddItem from "./AddItem";
import HomeList from "./HomeList";
import HomeEmpty from "./HomeEmpty";

export default {
    components: {
        HomeList,
        HomeEmpty
    },
    data() {
        return {
            // items: [],
            item: "",
            items: [
                {
                    name: "MacBook Pro",
                    price: "$1,500",
                    created_at: "created 5 days ago"
                },
                {
                    name: "Arkham Horror",
                    price: "$30",
                    created_at: "created 5 days ago"
                },
                {
                    name: "Socks",
                    price: "$15",
                    created_at: "created 5 days ago"
                }
            ]
        };
    },
    mounted() {},
    methods: {
        addItem() {
            this.$navigateTo(AddItem);
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
</style>
