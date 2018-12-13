<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"/>
      <ActionItem @tap="addItem" ios.systemIcon="4" ios.position="right" text="add"/>
    </ActionBar>
    <StackLayout>
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
              <RadRadialGauge class="gauge" title="5">
                <TitleStyle v-tkRadialGaugeTitleStyle textSize="20"/>
                <RadialScale
                  v-tkRadialGaugeScales
                  startAngle="-90"
                  sweepAngle="360"
                  minimum="0"
                  maximum="100"
                >
                  <ScaleStyle
                    v-tkRadialScaleStyle
                    ticksVisible="false"
                    labelsVisible="false"
                    lineThickness="0"
                  />
                  <RadialBarIndicator
                    v-tkRadialScaleIndicators
                    minimum="0"
                    maximum="100"
                    location="1"
                  >
                    <BarIndicatorStyle
                      v-tkRadialBarIndicatorStyle
                      fillColor="#faaea7"
                      barWidth="0.28"
                    />
                  </RadialBarIndicator>
                  <RadialBarIndicator
                    v-tkRadialScaleIndicators
                    minimum="0"
                    maximum="65"
                    location="1"
                    isAnimated="true"
                  >
                    <BarIndicatorStyle
                      v-tkRadialBarIndicatorStyle
                      fillColor="#db4c40"
                      barWidth="0.28"
                    />
                  </RadialBarIndicator>
                </RadialScale>
              </RadRadialGauge>
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
  </Page>
</template>

<script>
export default {
  data() {
    return {
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
        { name: "Socks", price: "$15", created_at: "created 5 days ago" }
      ]
    };
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
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
