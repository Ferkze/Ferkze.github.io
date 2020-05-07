<template>
    <v-container id="main-content">
        <v-row>
            <v-col>
                <h1 class="font-weight-medium">Portfolio</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" v-for="(item, index) in projects" :key="index">
                <v-card>
                    <v-card-title>
                        {{ item.title }}
                    </v-card-title>
                    <v-card-text>
                        <div>
                            {{ item.description }}
                        </div>
                        <v-list>
                            <v-list-item
                                v-for="(tech, index) in item.techs"
                                :key="index"
                                dense
                            >
                                <v-list-item-icon>
                                    <v-icon :color="tech.iconColor">{{ tech.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    {{ tech.name }}
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
    name: "portfolio",
    data: () => ({
        projects: [
            {
                title: 'Gran Finance',
                type: 'public',
                techs: [
                    {
                        name: 'Vue.js',
                        icon: 'mdi-vuejs',
                        iconColor: 'green'
                    }
                ]
            },
            {
                title: 'Backoffice',
                type: 'private',
                techs: [
                    {
                        name: 'Vue.js',
                        icon: 'mdi-vuejs',
                        iconColor: 'green'
                    }
                ]
            },
            {
                title: 'Clermont Odontologia',
                description: 'Blog de clínica odontológica com integração ao whatsapp para realizar agendamentos online.',
                type: 'public',
                techs: [
                    {
                        name: 'Wordpress',
                        icon: 'mdi-wordpress',
                        iconColor: 'light-blue'
                    }
                ]
            },
        ]
    })
};
</script>