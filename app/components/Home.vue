<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"/>
            <ActionItem class="action-item" ios.position="right" @tap="$navigateTo(settingsPage)">
                <Button class="btn btn-icon" text.decode="&#xf085;"></Button>
            </ActionItem>
        </ActionBar>
        <!-- <RadSideDrawer ref="drawer" :gesturesEnabled="false">
            <StackLayout ~drawerContent class="drawer">
                <StackLayout class="drawer-header">
                    <FlexboxLayout class="profile">
                        <Image src="~/img/no-profile@3x.png" stretch="none" class="profile-image"/>
                    </FlexboxLayout>
                    <Label text="suxur@me.com" class="profile-text"></Label>
                </StackLayout>
                <StackLayout>
                    <Label text="Your List" class="drawer-label"></Label>
                    <StackLayout class="divider"></StackLayout>
                    <Label text="Completed" class="drawer-label"></Label>
                    <StackLayout class="divider"></StackLayout>
                    <Label text="Profile" class="drawer-label" @tap="$navigateTo(profilePage)"></Label>
                    <StackLayout class="divider"></StackLayout>
                    <Label text="Settings" class="drawer-label" @tap="$navigateTo(settingsPage)"></Label>
                    <StackLayout class="divider"></StackLayout>
                </StackLayout>
                <Button text="Log Out" class="btn btn-danger"></Button>
            </StackLayout>
            <StackLayout ~mainContent> -->
                <TabView
                    :selectedIndex="selectedIndex"
                    iosIconRenderingMode="alwaysOriginal"
                    tabBackgroundColor="#3c153b"
                >
  <TabViewItem title="List">
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
  </TabViewItem>
  <TabViewItem title="Completed">
    <Label text="Content for Tab 2" />
  </TabViewItem>
  <TabViewItem title="Settings">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
                
            <!-- </StackLayout> -->
        <!-- </RadSideDrawer> -->
    </Page>
</template>

<script>
import Profile from "./Profile";
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
            profilePage: Profile,
            item: "",
            items: [],
            // items: [
            //     {
            //         name: "MacBook Pro",
            //         price: "$1,500",
            //         created_at: "created 5 days ago"
            //     },
            //     {
            //         name: "Arkham Horror",
            //         price: "$30",
            //         created_at: "created 5 days ago"
            //     },
            //     {
            //         name: "Socks",
            //         price: "$15",
            //         created_at: "created 5 days ago"
            //     }
            // ],
        };
    },
    mounted() {},
    methods: {
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
.profile {
    width: 60;
    height: 60;
    border-width: 2;
    border-color: $white;
    border-radius: 100;
    justify-content: center;
    align-items: center;
    background-color: $orange;

    &-text {
        text-align: center;
        color: $white;
        font-family: "Cabin";
        font-weight: bold;
    }
}

.btn-danger {
    margin-top: 25;
    background-color: $orange;
}

.drawer {
    background-color: white;

    &-header {
        padding: 15;
        background: url("~/img/drawer-header@3x.png");
        height: 175;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
    }

    &-label {
        color: $black;
        font-size: 20;
        font-family: "Cabin";
        margin-top: 15;
        margin-bottom: 5;
        margin-left: 15;
    }
}

.divider {
    height: 5;
    background-color: $light-grey;
}

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
