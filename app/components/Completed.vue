<template>
    <StackLayout class="background">
        <RadListView
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
    </StackLayout>
</template>

<script>
export default {
    data() {
        items: [
            {
                title: "Ready",
                dataset: []
            },
            {
                title: "Purchased",
                dataset: []
            }
        ];
    }
};
</script>

