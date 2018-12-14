<template>
    <Page class="page">
        <ActionBar class="action-bar" flat="true">
            <ActionItem class="action-item" ios.position="left" @tap="openDrawer">
                <Button class="btn btn-icon" text.decode="&#xf0c9;" @tap="addItem"></Button>
            </ActionItem>
            <Label class="action-bar-title" text="Home"/>
            <ActionItem class="action-item" ios.position="right" @tap="$navigateTo(settingsPage)">
                <Button class="btn btn-icon" text.decode="&#xf085;"></Button>
            </ActionItem>
        </ActionBar>
        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent class="sideStackLayout">
                <StackLayout class="sideTitleStackLayout">
                    <Label text="Navigation Menu"></Label>
                </StackLayout>
                <StackLayout class="sideStackLayout">
                    <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
                    <Label text="Social" class="sideLabel"></Label>
                    <Label text="Promotions" class="sideLabel"></Label>
                    <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
                    <Label text="Important" class="sideLabel"></Label>
                    <Label text="Starred" class="sideLabel"></Label>
                    <Label text="Sent Mail" class="sideLabel"></Label>
                    <Label text="Drafts" class="sideLabel"></Label>
                </StackLayout>
                <Label
                    text="Close Drawer"
                    color="lightgray"
                    padding="10"
                    style="horizontal-align: center"
                    @tap="onCloseDrawerTap"
                ></Label>
            </StackLayout>
            <StackLayout ~mainContent>
                <DockLayout stretchLastChild="true">
                    <FlexboxLayout dock="top" class="add-item" height="60" width="100%">
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
                    <FlexboxLayout dock="top">
                        <HomeList v-if="items.length > 0" :items="items"/>
                        <HomeEmpty v-else flexGrow="1"/>
                    </FlexboxLayout>
                </DockLayout>
            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
import Settings from "./Settings";
import HomeList from "./HomeList";
import HomeEmpty from "./HomeEmpty";

export default {
    components: {
        HomeList,
        HomeEmpty
    },
    data() {
        return {
            settingsPage: Settings,
            item: "",
            // items: []
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
        openDrawer() {
            this.$refs.drawer.nativeView.showDrawer();
        },

        onCloseDrawerTap() {
            this.$refs.drawer.nativeView.closeDrawer();
        },
        addItem() {
            if (this.item !== "") {
                let item = {
                    name: this.item,
                    price: "$0.00",
                    created_at: "created secs ago"
                };
                this.items.push(item);
                this.item = "";
            }
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
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
