<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Add Item"/>
        </ActionBar>
        <ScrollView>
            <StackLayout class="p-20">
                <StackLayout class="form form-dark">
                    <StackLayout class="input-field">
                        <Label class="label" text="Name"></Label>
                        <TextField
                            class="input"
                            hint="Name"
                            v-model="item.name"
                            returnKeyType="next"
                        ></TextField>
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
                            @tap="showDateField = true"
                        ></TextField>
                        <StackLayout class="hr-dark"></StackLayout>
                        <StackLayout v-show="showDateField">
                            <DatePicker v-model="date"/>
                            <Button
                                class="btn btn-outline"
                                text="Close"
                                @tap="showDateField = false"
                            />
                            <StackLayout class="hr-dark"></StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <Button class="btn btn-primary" text="Save" @tap="$modal.close()"/>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import moment from "moment";

export default {
    props: ["item"],
    data() {
        return {
            showDateField: false,
            date: new Date()
        };
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
