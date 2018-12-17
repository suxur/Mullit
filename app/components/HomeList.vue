<template>
    <FlexboxLayout>
        <RadListView
            ref="listView"
            for="item in items"
            @itemTap="onItemTap"
            swipeActions="true"
            @itemSwipeProgressStarted="onSwipeStarted"
        >
            <v-template>
                <FlexboxLayout class="item">
                    <StackLayout>
                        <CircularProgressBar :size="100" :progress="30"/>
                    </StackLayout>
                    <StackLayout>
                        <Label class="item-title" :text="item.name"/>
                        <Label :text="item.price"/>
                        <Label class="item-date" :text="item.created_at"/>
                    </StackLayout>
                    <StackLayout></StackLayout>
                </FlexboxLayout>
            </v-template>
            <v-template name="itemswipe">
                <GridLayout columns="auto, *, auto" backgroundColor="White">
                    <StackLayout
                        id="delete-view"
                        col="2"
                        class="swipe-item right"
                        orientation="horizontal"
                        @tap="onRightSwipeClick"
                    >
                        <Label
                            class="fa"
                            text.decode="&#xf1f8;"
                            verticalAlignment="center"
                            horizontalAlignment="center"
                        />
                    </StackLayout>
                </GridLayout>
            </v-template>
        </RadListView>
    </FlexboxLayout>
</template>

<script>
import CircularProgressBar from "./CircularProgressBar";
import EditItem from "./EditItem";

export default {
    components: { CircularProgressBar },
    props: ["items"],
    methods: {
        onItemTap({ item }) {
            console.log(`Tapped on ${item.name}`);
            this.$navigateTo(EditItem, {
                props: { item }
            });
        },
        onSwipeStarted({ data, object }) {
            console.log(`Swipe started`);
            const swipeLimits = data.swipeLimits;
            const swipeView = object;
            const rightItem = swipeView.getViewById("delete-view");
            swipeLimits.left = 0;
            swipeLimits.right = rightItem.getMeasuredWidth();
            // swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        },
        onRightSwipeClick({ object }) {
            console.log("right action tapped");
            // remove item
            // this.itemList.splice(this.itemList.indexOf(object.bindingContext), 1);
            // this.$refs.listView.notifySwipeToExecuteFinished();
        }
    }
};
</script>


<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

.item {
    font-family: "Cabin";
    padding: 15;
    border-bottom-width: 5;
    border-color: $light-grey;
    height: 100;

    &-title {
        font-size: 20;
        font-weight: bold;
    }

    &-date {
        color: $grey;
        font-size: 12;
    }
}

.gauge {
    font-family: "Cabin";
    font-weight: bold;
    width: 100;
}

.swipe-item {
    color: #f0b9dc;
    font-size: 28;
    padding: 16 30;
    border-bottom-width: 5;
    border-color: $light-grey;
}

.swipe-item.right {
    background-color: $maroon;
}
</style>
