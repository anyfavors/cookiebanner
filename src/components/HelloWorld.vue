<template>
    <div>

        <CJumbotron :fluid=true>
            <h1 class="display-3">Vi er helt tossede med småkager</h1>

            <p class="lead">
                <CButton class="btn-behance btn-pill">Accepter valgte</CButton>
                <CButton class="btn-danger btn-pill">Accepter ingen</CButton>
                <CButton class="btn-info btn-pill">Accepter alle</CButton>
            </p>

            <CRow alignVertical="baseline" alignHorizontal="center">
                <CCol col="2">
                    <toggle-button :value="true"
                                   disabled="disabled"
                                   color="#82C7EB"
                                   :labels="true"/>
                    Nødvendige
                </CCol>
                <CCol col="2">
                    <toggle-button :value="false"
                                   color="#82C7EB"
                                   :labels="true"/>
                    Præference
                </CCol>
                <CCol col="2">
                    <toggle-button :value="false"
                                   color="#82C7EB"
                                   :labels="true"/>
                    Statistik
                </CCol>

                <CCol>
                    <CButton
                            @click="collapse = !collapse"
                            color="primary"
                            class="mb-2"
                    >
                        <div v-if="collapse">Mindre info</div>
                        <div v-if="!collapse">Mere info</div>
                    </CButton>
                </CCol>
            </CRow>

            <CCollapse :show="collapse">

                <CRow class="align-content-center">
                    <CCol>
                        <CTabs variant="tabs" :active-tab="0">
                            <CTab title="Cookie deklaration">
                                <CTabs variant="tabs" vertical>
                                    <CTab title="Nødvendige">
                                        Nødvendige cookies er nødvendige for at understøtte sitets funktionalitet.
                                        <CDataTable
                                                :items="items"
                                                :fields="fields"
                                                hover
                                                sorter
                                                pagination
                                        />
                                    </CTab>
                                    <CTab title="Preference">
                                        <CDataTable
                                                :items="items"
                                                :fields="fields"
                                                hover
                                                sorter
                                                pagination
                                        />
                                    </CTab>
                                    <CTab title="Statistical">
                                        <CDataTable
                                                :items="items"
                                                :fields="fields"
                                                hover
                                                sorter
                                                pagination
                                        />
                                    </CTab>

                                </CTabs>
                            </CTab>
                            <CTab title="Cookie policy">
                                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut
                                labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi
                                ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse
                                cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa
                                qui
                                officia deserunt mollit anim id est laborum.
                            </CTab>
                            <CTab title="Privacy policy">
                                So very private.
                            </CTab>
                        </CTabs>
                    </CCol>
                </CRow>
            </CCollapse>
        </CJumbotron>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                collapse: false,
                innerCollapse: false,
                fields: ['navn', 'afsender', 'forml', 'udløb', 'type'],
                items: [{navn: 'phpsess', afsender: 'kaj', forml: 'statistik', type: 'https'},
                    {navn: 'phpsess', afsender: 'kaj', forml: 'statistik', type: 'https'},
                    {navn: 'phpsess', afsender: 'kaj', forml: 'statistik', type: 'https'},
                    {navn: 'phpsess', afsender: 'kaj', forml: 'statistik', type: 'https'}
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
