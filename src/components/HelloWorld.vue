<template>
    <div>
        <CRow>
            <vue-lorem lorem sentences />
        </CRow>
        <CRow>
            <p v-text="$faker.lorem.sentences()"></p>
        </CRow>
        <CRow>
            <CCol>
                <vue-lorem image avatar />
            </CCol>
            <CCol>
                <vue-lorem image avatar />
            </CCol>
        </CRow>
        <CModal
                title="Modal title"
                color="warning"
                size="xl"
                :closeOnBackdrop="false"
                :show.sync="warningModal"
        >
            <template v-slot:footer-wrapper>.</template>
            <template v-slot:header-wrapper>.</template>

            <CJumbotron :fluid=true>
                <h1 class="display-3">Københavns Kommunes hjemmeside bruger cookies </h1>

                <p>
                    Dette site bruger cookies til at forbedre visningen af indholdet, huske dine valg samt til statistik
                    for at kunne optimere indholdet løbende. Vi videregiver kun data til 3.part efter aftale og til
                    intern brug.
                </p>
                <p>Vi sætter først cookies, når du har accepterede cookies via knapperne. Bemærk enkelte/nogle
                    indholdselementer ikke vises korrekt, hvis du undlader at acceptere eller vælger at afvise vores
                    cookies.</p>

                <p>Du kan altid ændre dine valg om cookies ved at klikke på ”Mine valg af cookies”, der fremover vil stå
                    øverst på siden, når du har valgt</p>

                <CRow class="lead" alignHorizontal="center">
                    <CCol col="3">
                        <CButton class="btn-secondary btn-pill">Kun nødvendige cookies</CButton>
                    </CCol>
                    <CCol col="3">
                        <CButton class="btn-success btn-pill">Tillad udvalgte</CButton>
                    </CCol>
                    <CCol col="2">
                        <CButton class="btn-success btn-pill">Tillad alle </CButton>
                    </CCol>
                </CRow>

                <CRow><hr /></CRow>

                <CRow alignVertical="baseline" alignHorizontal="center" class="catsel">
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

                </CRow>

                <CRow>
                    <CCol class="offset-10">
                        <CButton
                                @click="collapse = !collapse"
                                color="secondary"
                                class="mb-2"
                        >
                            <div v-if="collapse">Skjul detaljer</div>
                            <div v-if="!collapse">Vis detaljer</div>
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
                                        <CTab title="Præference">
                                            <CDataTable
                                                    :items="itemsPref"
                                                    :fields="fields"
                                                    hover
                                                    sorter
                                                    pagination
                                            />
                                        </CTab>
                                        <CTab title="Statistik">
                                            <CDataTable
                                                    :items="itemsStat"
                                                    :fields="fields"
                                                    hover
                                                    sorter
                                                    pagination
                                            />
                                        </CTab>
                                        <CTab title="Funktionelle">
                                            <CDataTable
                                                    :items="itemsFunk"
                                                    :fields="fields"
                                                    hover
                                                    sorter
                                                    pagination
                                            />
                                        </CTab>

                                    </CTabs>
                                </CTab>
                                <CTab title="Cookie policy">
                                    {{cookiepolicy}}
                                </CTab>
                                <CTab title="Privacy policy">
                                    {{privacyPolicy}}
                                </CTab>
                            </CTabs>
                        </CCol>
                    </CRow>
                </CCollapse>
            </CJumbotron>
        </CModal>
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
                warningModal: true,
                collapse: false,
                innerCollapse: false,
                fields: ['navn', 'udbyder', 'forml', 'udlb', 'type'],
                itemsFunk: [{navn: 'phpsess', udbyder: 'me', forml: 'session', udlb: 'never', type: 'https'},
                    {navn: 'phpsess', udbyder: 'santa', forml: 'session', udlb: 'session', type: 'https'},
                    {navn: 'aspse', udbyder: 'none', forml: 'session', udlb: '30 days', type: 'https'},
                    {navn: 'cfuid', udbyder: 'cloudflare', forml: 'protection', udlb: 'never', type: 'https'}
                ],
                items: [{navn: 'phpsess', udbyder: 'me', forml: 'session', udlb: 'never', type: 'https'},
                    {navn: 'phpsess', udbyder: 'santa', forml: 'session', udlb: 'session', type: 'https'},
                    {navn: 'aspse', udbyder: 'none', forml: 'session', udlb: '30 days', type: 'https'},
                    {navn: 'cfuid', udbyder: 'cloudflare', forml: 'protection', udlb: 'never', type: 'https'}
                ],
                itemsPref: [{
                    navn: 'pref',
                    udbyder: 'easterbunny',
                    forml: 'preferences',
                    udlb: 'never',
                    type: 'https'
                },
                    {navn: 'setns', udbyder: 'john', forml: 'preferences', udlb: 'never', type: 'https'},
                    {navn: 'cookie_opts', udbyder: 'he-man', forml: 'preferences', udlb: 'never', type: 'https'},
                    {navn: 'adsrv', udbyder: 'doe,john', forml: 'preferences', udlb: 'never', type: 'https'}
                ],
                itemsStat: [
                    {navn: '1111751702_1373418', udbyder: 'Defgo', forml: 'Sikrer at en bruger ikke inviteres til at udfylde flere gange', udlb: '3 mdr.', type: 'https'},
                    {navn: 'defgo_domainEnterTime', udbyder: 'Defgo', forml: 'Sikrer at en bruger inviteres første gang', udlb: 'Session', type: 'https'},
                    {navn: 'defgo_lastVisitedSites', udbyder: 'Defgo', forml: 'Registrerer hvilke sider der er besøgt på sitet', udlb: 'session', type: 'https'},
                    {navn: 'TestCookies', udbyder: 'Defgo', forml: 'Registrerer om brugeren har cookies aktiveret i sin browser', udlb: 'never', type: 'https'},
                    {navn: 'ASPSESSIONID', udbyder: 'Defgo', forml: 'Bevarer brugertilstand på tværs af sideforespørgsler', udlb: 'session', type: 'https'},
                    {navn: 'JSESSIONID', udbyder: 'Defgo', forml: 'Bevarer brugertilstand på tværs af sideforespørgsler', udlb: 'session', type: 'https'},

                ],
                cookiepolicy: "What Are Cookies\n" +
                    "\n" +
                    "As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.\n" +
                    "\n" +
                    "For more general information on cookies, please read \"What Are Cookies\".\n" +
                    "\n" +
                    "How We Use Cookies\n" +
                    "\n" +
                    "We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.\n" +
                    "\n" +
                    "Disabling Cookies\n" +
                    "\n" +
                    "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.\n" +
                    "\n" +
                    "The Cookies We Set\n" +
                    "\n" +
                    "Account related cookies\n" +
                    "\n" +
                    "If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.\n" +
                    "\n" +
                    "Login related cookies\n" +
                    "\n" +
                    "We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.\n" +
                    "\n" +
                    "Email newsletters related cookies\n" +
                    "\n" +
                    "This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.\n" +
                    "\n" +
                    "Surveys related cookies\n" +
                    "\n" +
                    "From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.\n" +
                    "\n" +
                    "Forms related cookies\n" +
                    "\n" +
                    "When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.\n" +
                    "\n" +
                    "Site preferences cookies\n" +
                    "\n" +
                    "In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.\n" +
                    "\n" +
                    "Third Party Cookies\n" +
                    "\n" +
                    "In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.\n" +
                    "\n" +
                    "Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.\n" +
                    "\n" +
                    "From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.",
                privacyPolicy: "Privacy Policy for siteman\n" +
                    "At sitename, accessible from siteurl, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by sitename and how we use it.\n" +
                    "\n" +
                    "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.\n" +
                    "\n" +
                    "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in sitename. This policy is not applicable to any information collected offline or via channels other than this website.\n" +
                    "\n" +
                    "Consent\n" +
                    "By using our website, you hereby consent to our Privacy Policy and agree to its terms.\n" +
                    "\n" +
                    "Information we collect\n" +
                    "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.\n" +
                    "\n" +
                    "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.\n" +
                    "\n" +
                    "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.\n" +
                    "\n" +
                    "How we use your information\n" +
                    "We use the information we collect in various ways, including to:\n" +
                    "\n" +
                    "Provide, operate, and maintain our webste\n" +
                    "Improve, personalize, and expand our webste\n" +
                    "Understand and analyze how you use our webste\n" +
                    "Develop new products, services, features, and functionality\n" +
                    "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes\n" +
                    "Send you emails\n" +
                    "Find and prevent fraud\n" +
                    "Log Files\n" +
                    "sitename follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator.\n" +
                    "\n" +
                    "Cookies and Web Beacons\n" +
                    "Like any other website, sitename uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.\n" +
                    "\n" +
                    "For more general information on cookies, please read \"What Are Cookies\".\n" +
                    "\n" +
                    "Advertising Partners Privacy Policies\n" +
                    "You may consult this list to find the Privacy Policy for each of the advertising partners of sitename.\n" +
                    "\n" +
                    "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on sitename, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.\n" +
                    "\n" +
                    "Note that sitename has no access to or control over these cookies that are used by third-party advertisers.\n" +
                    "\n" +
                    "Third Party Privacy Policies\n" +
                    "sitename's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.\n" +
                    "\n" +
                    "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.\n" +
                    "\n" +
                    "CCPA Privacy Rights (Do Not Sell My Personal Information)\n" +
                    "Under the CCPA, among other rights, California consumers have the right to:\n" +
                    "\n" +
                    "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.\n" +
                    "\n" +
                    "Request that a business delete any personal data about the consumer that a business has collected.\n" +
                    "\n" +
                    "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.\n" +
                    "\n" +
                    "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.\n" +
                    "\n" +
                    "GDPR Data Protection Rights\n" +
                    "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:\n" +
                    "\n" +
                    "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.\n" +
                    "\n" +
                    "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.\n" +
                    "\n" +
                    "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.\n" +
                    "\n" +
                    "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.\n" +
                    "\n" +
                    "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.\n" +
                    "\n" +
                    "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.\n" +
                    "\n" +
                    "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.\n" +
                    "\n" +
                    "Children's Information\n" +
                    "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.\n" +
                    "\n" +
                    "sitename does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .catsel {
        margin-top: 1rem;
    }

    p
    {
        text-align: left;
    }
    .modal-warning .modal-content {
        border-color: #f9b115;
        background-color: #fff2d1;
    }

    .modal-body {
       background-color:  #fff2d1 !important;
        padding: 0 0 0 0;
    }
    .jumbotron {
        background-color:  #fff2d1 !important
    }
</style>
