<template>
    <v-app-bar app color="#121212" dark elevate-on-scroll>
        <v-toolbar-title>
            <span>Fabio Martins</span>
        </v-toolbar-title>

        <template v-slot:extension>
            <v-tabs centered background-color="transparent">
                <v-tab replace to="/">Início</v-tab>
                <v-tab replace to="/about">Sobre</v-tab>
                <v-tab replace to="/portfolio">Portfolio</v-tab>
                <v-tab replace to="/skills">Habilidades</v-tab>
                <v-tab replace to="/contact">Contato</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name: "app-bar"
};
</script>