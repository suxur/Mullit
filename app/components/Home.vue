<template>
  <Page class="page">
    <ActionBar class="action-bar" flat="true">
      <Label class="action-bar-title" text="Home"/>
    </ActionBar>
    <FlexboxLayout flexDirection="column">
      <StackLayout class="add-item" orientation="horizontal">
        <StackLayout horizontalAlignment="left" width="80%">
          <TextField hint="I wish I had..."></TextField>
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <Button horizontalAlignment="right" width="20%" class="btn btn-primary" text="Add"></Button>
      </StackLayout>
      <HomeList v-if="items.length > 0" :items="items"/>
      <HomeEmpty v-else flexGrow="1"/>
    </FlexboxLayout>
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
      items: [],
      item: ""
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
      // ]
    };
  },
  mounted() {},
  methods: {
    addItem() {
      this.$showModal(AddItem);
      //   this.$navigateTo(AddItem);
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
  height: 65;
  background-color: $orange;
  padding: 10;
}
</style>
