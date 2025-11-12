import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"3742a17d-a128-4dee-a937-650343a0620e","homePageId":"26e88fa9-e255-4f3b-9cf9-72088b373abe","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"pt","default":true}],"background":{},"workflows":[],"pages":[{"id":"ec8356bb-5cba-46cb-b0a0-99fdb7b6790f","linkId":"ec8356bb-5cba-46cb-b0a0-99fdb7b6790f","name":"2. Financiamento Imobiliario","folder":"1. Cálculo Revisional/","paths":{"pt":"financiamento-imobiliario","default":"financiamento-imobiliario"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"ec3f4663-249c-4386-9770-db61b9762a31","sectionTitle":"Main","linkId":"8ccf60d6-88b9-4336-8ba6-35dadec78275"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"67e3b236-b664-4b3c-9282-9ae379fb022b","linkId":"67e3b236-b664-4b3c-9282-9ae379fb022b","name":"5. Criar Nova Oportunidade","folder":"2. CRM/","paths":{"pt":"criar-nova-oportunidade","default":"criar-nova-oportunidade"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"06cf8903-cc62-45a8-bbd6-1bf0ac112c75","sectionTitle":"Main Section","linkId":"59e5db02-14b7-41a8-b8ef-d3ede5991bbc"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dafe74f5-cdbd-45c4-8306-0dbed6a8b3e7","linkId":"dafe74f5-cdbd-45c4-8306-0dbed6a8b3e7","name":"3. Cartao Credito","folder":"1. Cálculo Revisional/","paths":{"pt":"cartao-credito","default":"cartao-credito"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"c057fcda-d7b0-489d-9e41-e6ffb592a9c3","sectionTitle":"Main","linkId":"71907d43-2acc-4703-a18f-d1fedb06658c"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"296e5e88-0bdf-4726-a6cd-67c6bba9554b","linkId":"296e5e88-0bdf-4726-a6cd-67c6bba9554b","name":"4. Revisão Geral","folder":"1. Cálculo Revisional/","paths":{"pt":"revisao-geral","default":"revisao-geral"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"44bae1a8-02c5-427f-9d60-6608db19f9e0","sectionTitle":"Main","linkId":"b0fe62d7-5a64-4ea6-8835-4ccf9a5bb09b"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c0f6f271-a221-4942-8a13-5111d9290dd2","linkId":"c0f6f271-a221-4942-8a13-5111d9290dd2","name":"Cadastrar Empresa","folder":"0. Autenticação/","paths":{"pt":"cadastrar-empresa","default":"cadastrar-empresa"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"4d3a6de3-1f28-437c-9b22-3dee80ba7d61","sectionTitle":"Section","linkId":"3ec1d3e7-e8c7-4459-a8de-62ad713ce019"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5b0d63eb-bc40-4aaf-be2e-d8882554c7b2","linkId":"5b0d63eb-bc40-4aaf-be2e-d8882554c7b2","name":"Usuarios Tela Completa","folder":"Administrador/","paths":{"pt":"usuarios-tela-completa","default":"usuarios-tela-completa"},"langs":["pt"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{"pt":"Gestão de Usuários"},"meta":{"desc":{"pt":"Tela de gestão de usuários com menu lateral, header, cores e tabela conforme solicitado."},"keywords":{"pt":"usuários, gestão, menu, header, tabela, administração"},"socialDesc":{"pt":"Tela para gerenciar usuários com menu lateral, header e tabela detalhada."},"socialTitle":{"pt":"Gestão de Usuários"}},"metaImage":""},{"id":"3e54a127-0c47-4efa-adaf-77024a2d73a2","linkId":"3e54a127-0c47-4efa-adaf-77024a2d73a2","name":"5. Análise Prévia","folder":"1. Cálculo Revisional/","paths":{"pt":"analise-previa","default":"analise-previa"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"f5ae48dd-dc89-4d4f-9c4b-baaddc622f31","sectionTitle":"Main","linkId":"d830d26d-83de-4dff-9c5e-dfb8d225cff0"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ff2c8d97-4513-423b-8a88-a6a1000c5e07","linkId":"ff2c8d97-4513-423b-8a88-a6a1000c5e07","name":"6. Análise Prévia do Cálculo","folder":"1. Cálculo Revisional/","paths":{"pt":"analise-previa-calculo","default":"analise-previa-calculo"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"e2c2a2ca-c939-48e6-bd9a-9a9335483a31","sectionTitle":"Main","linkId":"8a634600-4a21-480b-b8f2-71b4aa151733"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fee97d00-bc10-4dab-bf03-fc6e1f01268d","linkId":"fee97d00-bc10-4dab-bf03-fc6e1f01268d","name":"7. Relatório Completo de Cálculo","folder":"1. Cálculo Revisional/","paths":{"pt":"relatorio-completo-calculo","default":"relatorio-completo-calculo"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"6f9e054b-0867-4dde-8f9e-2999ceefe5b2","sectionTitle":"Main","linkId":"986962fd-1e36-4b03-baba-c0c5d4b84921"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"925fcd34-650f-4912-bf81-24fc13e94dba","linkId":"925fcd34-650f-4912-bf81-24fc13e94dba","name":"2. Cadastrar Cliente","folder":"2. CRM/","paths":{"pt":"cadastrar-cliente","default":"cadastrar-cliente"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"2ad1fa83-74bc-45dc-b22a-68a542176b88","sectionTitle":"Section","linkId":"f1043151-093d-4675-9276-4904ded222d4"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b66a12e2-68bb-4801-a3e8-28aa4cf8f3e2","linkId":"b66a12e2-68bb-4801-a3e8-28aa4cf8f3e2","name":"3. Detalhes do Cliente","folder":"2. CRM/","paths":{"pt":"detalhes_cliente","default":"detalhes_cliente"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"f16a71c3-f3fb-4435-87fc-4ef6a43b786a","sectionTitle":"Main","linkId":"cc3a9403-9c0b-426c-9b50-b7e8b04d4cff"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f7ea0e4e-3f04-4266-9118-547801037f21","linkId":"f7ea0e4e-3f04-4266-9118-547801037f21","name":"Editar Contato","folder":"5. Contato/","paths":{"pt":"editar-contato","default":"editar-contato"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"e8d6e41d-d9f9-4df3-9ace-2b351e60b533","sectionTitle":"Sistema","linkId":"8ab29a94-fe03-4778-9155-43b31d4b7508"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4576518f-e815-43a4-b443-c49360715fb3","linkId":"4576518f-e815-43a4-b443-c49360715fb3","name":"Verificação","folder":"0. Autenticação/","paths":{"pt":"codigo-verificacao","default":"codigo-verificacao"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"c1285bc0-19ae-4848-9e5e-cfc1494cb61d","sectionTitle":"Section","linkId":"a2377077-bc05-4bf8-91fc-07f2fec589c1"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2ac94bba-ab3d-4697-b5f3-8c455e990fd0","linkId":"2ac94bba-ab3d-4697-b5f3-8c455e990fd0","name":"Permissões de Usuários","folder":"5. Permissões de Usuários/","paths":{"pt":"permissoes-de-usuarios","default":"permissoes-de-usuarios"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"6e519631-ffd9-4a68-82f9-4a50394683e5","sectionTitle":"Permissões de Usuários","linkId":"1c164cba-4764-477b-93f8-5fbff776f1ca"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7b320020-2ad7-4fe1-b465-b1c124377fd8","linkId":"7b320020-2ad7-4fe1-b465-b1c124377fd8","name":"Geração de Petições","folder":"3. Geração de Petições/","paths":{"pt":"geracao-de-peticoes","default":"geracao-de-peticoes"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"b83d73eb-2e6a-4fb9-aafb-9e12a0eb1fb3","sectionTitle":"Main","linkId":"346270f2-145e-4067-83c6-534247f9d47b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a8e1e391-9d4b-4771-9b52-91fd04b24d1a","linkId":"a8e1e391-9d4b-4771-9b52-91fd04b24d1a","name":"Configurações Gerais","folder":"6. Configurações do Sistema/","paths":{"pt":"configuracoes-gerais","default":"configuracoes-gerais"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"677ad6ff-ee0e-4f5d-90b8-95d566e043d9","sectionTitle":"Configurações do Sistema","linkId":"f77737b6-a769-4b4c-8fc2-d6491cf47a32"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"15de41de-9639-4a57-89c8-132d72a749d2","linkId":"15de41de-9639-4a57-89c8-132d72a749d2","name":"1. CRM","folder":"2. CRM/","paths":{"pt":"crm","default":"crm"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"82359e09-0af6-4820-8d53-2db0b7c48a34","sectionTitle":"Main","linkId":"afc4d7ae-7f7d-47b7-aa1d-234d509fabcf"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c569ca0b-2dbb-4977-850b-11dbf49eeeac","linkId":"c569ca0b-2dbb-4977-850b-11dbf49eeeac","name":"Detalhes do Usuario","folder":"4. Usuários/","paths":{"pt":"detalhes-do-usuario","default":"detalhes-do-usuario"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"8556020b-e01e-4069-b6c3-669c28339fa7","sectionTitle":"Sistema","linkId":"701f6be6-5b6e-4ee3-95fa-c09d9be209c7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"55fb8b4c-9385-42ec-ab2c-f943a8e50eaa","linkId":"55fb8b4c-9385-42ec-ab2c-f943a8e50eaa","name":"Contatos","folder":"5. Contato/","paths":{"pt":"contatos","default":"contatos"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"909c3d9b-7c69-4d79-8b89-c4adadb8a74a","sectionTitle":"Sistema","linkId":"6cd28fa2-aee9-4f45-9d90-6d0f4d1e6ca6"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"26e88fa9-e255-4f3b-9cf9-72088b373abe","linkId":"26e88fa9-e255-4f3b-9cf9-72088b373abe","name":"Home","folder":null,"paths":{"default":"home"},"langs":["pt"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2e0efbea-35b6-45c0-b33d-d11ff04d7a5b","linkId":"2e0efbea-35b6-45c0-b33d-d11ff04d7a5b","name":"Login","folder":"0. Autenticação/","paths":{"pt":"login","default":"login"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"977502a6-2784-4712-98c4-c0e99ecc723f","sectionTitle":"Section","linkId":"74640b00-819e-4736-9896-f4fc6cf034e7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e33370d0-9875-476a-87b0-09fc707803d5","linkId":"e33370d0-9875-476a-87b0-09fc707803d5","name":"Recuperar Senha","folder":"0. Autenticação/","paths":{"pt":"recuperar-senha","default":"recuperar-senha"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"c7cb5ae9-0605-44ef-9869-b4479feb619b","sectionTitle":"Section","linkId":"78dd9dc5-a002-4dce-8f3e-5164790489fb"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"86c29d67-7444-4a5b-8e08-80e3e5b40edb","linkId":"86c29d67-7444-4a5b-8e08-80e3e5b40edb","name":"Nova Senha","folder":"0. Autenticação/","paths":{"pt":"nova-senha","default":"nova-senha"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"692aa5a7-6d40-4588-a8c3-b76d8588adbd","sectionTitle":"Section","linkId":"cc56ce94-0090-46e3-bdf7-40d3e7fc99e2"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dd7d5ba1-24e5-497e-b72e-0cd31f4ef504","linkId":"dd7d5ba1-24e5-497e-b72e-0cd31f4ef504","name":"Usuarios","folder":"4. Usuários/","paths":{"pt":"usuarios","default":"usuarios"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"e9aab1e0-e3bd-4722-a6a0-b11dd6039aa4","sectionTitle":"Sistema","linkId":"0a57b3a4-1bc3-440e-91d2-16442ff63499"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"afb49d73-20bf-4b9d-80c3-fc29522fa310","linkId":"afb49d73-20bf-4b9d-80c3-fc29522fa310","name":"Detalhes do Contato","folder":"5. Contato/","paths":{"pt":"detalhes-do-contato","default":"detalhes-do-contato"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"51becd1b-7f84-49d9-9805-c9b73200de37","sectionTitle":"Contact Details Section","linkId":"e6204445-a004-4983-8b53-9850a2171687"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f3c2c838-e80a-4a4d-8605-5d30c5ed5992","linkId":"f3c2c838-e80a-4a4d-8605-5d30c5ed5992","name":"Cadastrar Usuario","folder":"4. Usuários/","paths":{"pt":"cadastrar-usuario","default":"cadastrar-usuario"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"e95c1d24-f6a7-43c5-bc11-773f733a71e9","sectionTitle":"Sistema","linkId":"0fdf0a75-1c98-40b2-9053-680d2ef0ef7e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"309569fa-0491-4e95-87ef-6010b3e2d2cc","linkId":"309569fa-0491-4e95-87ef-6010b3e2d2cc","name":"Editar Usuários","folder":"4. Usuários/","paths":{"pt":"editar-usuarios","default":"editar-usuarios"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"a204041e-2a64-45bb-af45-5b1ba5fd6c17","sectionTitle":"Sistema","linkId":"82de8d16-551a-4b1b-915f-26da7247919c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"10a6e50a-8eb2-4705-b3c3-0a089fa9acc5","linkId":"10a6e50a-8eb2-4705-b3c3-0a089fa9acc5","name":"1. Calculo Revisional","folder":"1. Cálculo Revisional/","paths":{"pt":"calculo-revisional","default":"calculo-revisional"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"13a3c415-3874-45c1-a2d6-7f1442c385f2","sectionTitle":"Section","linkId":"25518be0-0f86-46e7-81f2-265b9ac500d6"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6e0343fa-71d1-4cd2-a643-b686a1f126a1","linkId":"6e0343fa-71d1-4cd2-a643-b686a1f126a1","name":"4. Cadastrar Lead","folder":"2. CRM/","paths":{"pt":"cadastrar-lead","default":"cadastrar-lead"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"13544868-4c5c-4a85-b6c6-51520c05f9b7","sectionTitle":"Section","linkId":"c15ebc2e-3674-42b8-ac37-66571fbb8a1a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e6623c7b-a2b5-4cb1-9243-1e0b1079e817","linkId":"e6623c7b-a2b5-4cb1-9243-1e0b1079e817","name":"Cadastro","folder":"0. Autenticação/","paths":{"pt":"cadastro","default":"cadastro"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"f2081dc3-5e54-4f23-a8f8-a65b4cc22a18","sectionTitle":"Section","linkId":"16f53afc-d636-4853-a7f7-85fbf735f355"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"09aa1fbd-325b-491e-b80d-3d2afdac77a8","linkId":"09aa1fbd-325b-491e-b80d-3d2afdac77a8","name":"Cadastrar Contato","folder":"5. Contato/","paths":{"pt":"cadastrar-contato","default":"cadastrar-contato"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"682a3084-4d07-4f06-9ece-944f16c5e81a","sectionTitle":"Sidemenu","linkId":"a6905ef3-a505-404c-8930-f4620bebcf16"},{"uid":"ea95a160-9922-43fa-8b0e-62e7077e400c","sectionTitle":"Header","linkId":"1fcf7bd5-fa55-4276-97ff-d0abb58111a7"},{"uid":"ec1a9c38-bf22-46bc-bb3a-e889de4b2bdd","sectionTitle":"Sistema","linkId":"c28292c1-076e-4f04-9895-2d5a9272e91c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"97e7b1ae-f88a-4697-849c-ee56ab49bb48","name":"JavaScript","namespace":"javascript"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 24;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
