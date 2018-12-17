<template>
    <StackLayout class="p-20">
        <StackLayout class="form form-dark">
            <StackLayout class="input-field">
                <Label class="label" text="Name"></Label>
                <TextField class="input" hint="Name" v-model="item.name" returnKeyType="next"></TextField>
                <StackLayout class="hr-dark"></StackLayout>
            </StackLayout>
            <StackLayout class="input-field">
                <Label class="label" text="Price"></Label>
                <TextField
                    class="input"
                    hint="Price"
                    keyboardType="number"
                    v-model="item.price"
                    returnKeyType="next"
                ></TextField>
                <StackLayout class="hr-dark"></StackLayout>
            </StackLayout>
            <StackLayout class="input-field">
                <Label class="label" text="Added"></Label>
                <TextField
                    class="input"
                    hint="Added"
                    :editable="false"
                    v-model="added"
                    returnKeyType="next"
                    @tap="showDateField"
                ></TextField>
                <StackLayout class="hr-dark"></StackLayout>
                <StackLayout v-show="showDateField">
                    <DatePicker v-model="date"/>
                    <Button class="btn btn-outline" text="Close" @tap="showDateField = false"/>
                    <StackLayout class="hr-dark"></StackLayout>
                </StackLayout>
            </StackLayout>
            <Button class="btn btn-primary" text="Save" @tap="$modal.close()"/>
        </StackLayout>
    </StackLayout>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            // showDateField: false,
            item: {
                name: "",
                price: "",
                added: ""
            },
            date: new Date()
        };
    },
    created() {
        // console.log(this);
    },
    computed: {
        added() {
            return moment(this.date).format("MM/DD/YYYY");
        }
    },
    methods: {}
};
</script>

<style>
</style>
