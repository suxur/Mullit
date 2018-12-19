<template>
        <Page
        class="page"
        actionBarHidden="true"
        backgroundSpanUnderStatusBar="true"
        statusBarStyle="light"
    >
        <GridLayout rows="*, auto" columns="*, *, *">
            <component v-for="component in components" :key="component" v-show="component === active" :is="component" row="0" col="0" colSpan="3"/>
                <!-- <HomeList v-if="items.length > 0" :items="items"/>
                <HomeEmpty v-else flexGrow="1"/> -->
            <Button :class="tabButtonClasses('List')" text.decode="&#xf0c9;" row="1" col="0" @tap="active = 'List'"></Button>
            <Button :class="tabButtonClasses('Completed')" text.decode="&#xf14a;" row="1" col="1" @tap="active = 'Completed'"></Button>
            <Button :class="tabButtonClasses('Settings')" text.decode="&#xf013;" row="1" col="2" @tap="active = 'Settings'"></Button>
        </GridLayout>
    </Page>
</template>

<script>
import Profile from "./Profile";
import Settings from "./Settings";
import List from "./List";
import Completed from "./Completed";

export default {
    components: {
        List,
        Completed,
        Settings,
    },
    data() {
        return {
            active: 'Completed',
            components: [
                'List',
                'Completed',
                'Settings'
            ],
            settingsPage: Settings,
            profilePage: Profile,
            item: "",
            items: []
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
    computed: {
        tabButtonClasses() {
            return component => ({
                fas: true,
                'btn-tab': true,
                'is-active': component === this.active
            })
        }
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
// Tab text color #BFA3BE
// Tab active text color white
// Tab active button color #8C3F8A

.btn-tab {
    // background-color: $purple;
    color: #BFA3BE;
    font-size: 20;
    padding: 10;
    margin: 20;

}

    .is-active {
        background-color: #8C3F8A;
        color: $white;
        font-size: 20;
        border-radius: 10;
    }


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




</style>
