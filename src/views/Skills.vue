<template>
    <v-container id="main-content">
        <v-row>
            <v-col cols="12">
                <h1>Habilidades</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-card class="pa-2">
                    <v-card-title>Frontend</v-card-title>
                    <v-card-text>
                        <v-subheader>Frameworks</v-subheader>
                        <v-list>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="light-green lighten-1">mdi-vuejs</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Vue.js</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="red lighten-1">mdi-angularjs</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Angularjs</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-responsive :aspect-ratio="16/9">
                        <v-img :src="require('../assets/coloured-macbook.jpg')"></v-img>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-responsive :aspect-ratio="16/9">
                        <v-img :src="require('../assets/dark-macbook.jpg')"></v-img>
                    </v-responsive>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-card class="pa-2">
                    <v-card-title>Backend</v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="light-green lighten-1">mdi-nodejs</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Node.js</v-list-item-title>
                                    <v-list-item-subtitle>Express, Typescript, Mongoose, Sequelize</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="blue lighten-1">mdi-language-go</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Golang</v-list-item-title>
                                    <v-list-item-subtitle>Google Cloud Platform</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="orange darken-2">mdi-laravel</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>PHP</v-list-item-title>
                                    <v-list-item-subtitle>Laravel</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color>mdi-language-python</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Python</v-list-item-title>
                                    <v-list-item-subtitle>Flask</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "home",
};
</script>
