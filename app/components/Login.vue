<template>
    <Page
        class="page"
        actionBarHidden="true"
        backgroundSpanUnderStatusBar="true"
        statusBarStyle="light"
    >
        <FlexboxLayout class="content">
            <Image src="~/img/logo@3x.png" stretch="none" class="logo"/>
            <PreviousNextView>
                <StackLayout class="form">
                    <StackLayout class="input-field">
                        <Label class="label" text="E-Mail"></Label>
                        <TextField
                            class="input"
                            hint="Email"
                            :isEnabled="!processing"
                            keyboardType="email"
                            autocorrect="false"
                            autocapitalizationType="none"
                            v-model="user.email"
                            returnKeyType="next"
                            @returnPress="focusPassword"
                        ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <StackLayout class="input-field">
                        <Label class="label" text="Password"></Label>
                        <FlexboxLayout justifyContent="space-between">
                            <TextField
                                flexGrow="1"
                                class="input"
                                ref="password"
                                :isEnabled="!processing"
                                hint="Password"
                                :secure="isSecure"
                                v-model="user.password"
                                :returnKeyType="isLoggingIn ? 'done' : 'next'"
                                @returnPress="focusConfirmPassword"
                            ></TextField>
                            <Button
                                :text="isSecureIcon"
                                class="fa btn-secure"
                                @tap="isSecure = !isSecure"
                            />
                        </FlexboxLayout>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <Button
                        class="btn btn-primary"
                        :text="isLoggingIn ? 'Log In' : 'Sign Up'"
                        :isEnabled="!processing"
                        @tap="submit"
                    />
                    <Button
                        v-show="isLoggingIn"
                        text="Forgot your password?"
                        class="btn"
                        @tap="forgotPassword"
                    />
                </StackLayout>
            </PreviousNextView>
            <Label class="toggle-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="text-bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            isLoggingIn: true,
            isSecure: true,
            user: {
                email: "",
                password: ""
            }
        };
    },
    computed: {
        isSecureIcon() {
            let code = 0xf070;
            if (this.isSecure) {
                code = 0xf06e;
            }
            return String.fromCharCode(code);
        }
    },
    methods: {
        submit() {},
        forgotPassword() {},
        toggleForm() {}
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.page {
    background-color: $orange;
    background-image: url("~/img/background@3x.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
}

.content {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.logo {
    margin-top: 50;
}

.toggle-label {
    color: $white;
    font-family: "Cabin";
}
</style>
