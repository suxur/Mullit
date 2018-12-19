<template>
    <GridLayout rows="60, *">
        <AddItem row="0"></AddItem>
        <ItemListEmpty row="1"></ItemListEmpty>
    </GridLayout>
</template>

<script>
import AddItem from './AddItem';
import ItemList from './ItemList';
import ItemListEmpty from './ItemListEmpty';

export default {
    components: {
        AddItem,
        ItemList,
        ItemListEmpty
    }
}
</script>
