## Vaga escolhida
```javascript
Time de Produto
Time Backoffice
```
## Curriculum 


[Tonni Andrade](https://www.linkedin.com/in/tonniandradedesign)
==================

###Apresentação
Me chamo Tonni, atualmente trabalho como gestor da equipe de front end da Agencia Kindle mas estou em busca de novos desafios e uma oportunidade de expandir meus conhecimentos.

Atuo como desenvolvedor front end há 7 anos e com o recente crescimento de novas tecnologias busco uma oportunidade em uma empresa que utilize tais tecnologias sem preconceito mas com consciencia e visão.

Fico à disposição para entrevistas presenciais ou por voz (skype, telefone, whatsapp, telegram).

>Dados de contato
```json
{"Developer":[
    {
    "full_name": "Antonio Carlos de Andrade d'Avila Pacca",
    "id": "020.797.76.46-3"
    },
    {
    "email": "tonni.andrade@gmail.com",
    "celphone": "21 96983.2296",
    "telephone": "21 3401.4472",
    "address": "Rua Geraldo Ribeiro do Nascimento, 339S - Pedra de Guaratiba - CEP:23030-330"
    }
]}
```

##Formação
>Design Digital - Instituto Infnet (2010)

___________________________________________________________
___________________________________________________________

##Atuação Profissional
>Agência Kindle
    
* Abril 2016 - presente (Gestor da equipe de Front end)
* Julho 2015 - Março 2016 (Desenvolvedor mobile Phonegap/Cordova)

___

>BT Service

* Abril 2014 - Janeiro 2015 (Gerente de Marketing e Desenvolvimento)

___

>Consórcio Maracanã (Odebrecht Infraestrutura)

* 2010 - 2014 (Designer)

___

>Tecnologia e Design Empresa Jr.

* 2009 - 2012 (Co-fundador e Diretor de Projetos)

___

>Technip Engenharia

* 2006 - 2007 (Desenhista júnior e 3D Modeler)

___________________________________________________________
___________________________________________________________


##Know-how

>**Javascript**

```javascript
//Retorna a lista dos meus conhecimentos técnicos
var fs = require('fs');
module.exports = function(){
    var knowhow = [];
    fs.readFile('./knowhow.json', 'utf8', function(error, data){
        if(error){
            throw error;
        }
        knowhow = JSON.parse(data);
    });
    for(var i = 0;i < knowhow.length;i++){
        console.log('##' + knowhow[i].title + '\n\n' + knowhow[i].description);
    }
}
```

>**HTML5** 

```html
<body>
    <section>
        <h1>Semanticamente correto e estrutura reaproveitável.</h1>
    </section>
</body>
```

>**CSS3** - LESS/SASS 

```sass
html, body, div, a { reset: apenas quando necessário; }

&#35meuID { unicamente: para manipular DOM com javascript/jquery}

.minhaClasse { estruturada: para máximo reaproveitamento; }

@color-com-nomes: #001A31; //facilita a definição de paleta por projeto

/*pequeno exemplo de como utilizo ferramentas / técnicas para produtividade*/
@valor-de-base: 16;
.classe-como-funcao(@valor-dinamico) {
  @valor-final: @valor-dinamico / @valor-de-base;
  font-size: ~"@{valor-final}rem";
}
```

>**Drupal 7**

```php
<?php
//Modelo básico para retornar conteúdo com o módulo Entity para Drupal 7
function get_member_list($content_type){
    try {
        if($content_type == 'novo_membro'){
            $type = $content_type;
            $query = new EntityFieldQuery();
            $result = $query->entityCondition('entity_type', 'node')
                ->propertyCondition('status', NODE_PUBLISHED)
                ->propertyCondition('promote', 1)
                ->entityCondition('bundle', $type)
                ->fieldOrderBy('field_parceiros_peso', 'value', 'ASC')
                ->execute();
            $i = 0;
            if (!empty($result['novo_membro'])) {
                $member = new_member_load_multiple(array_keys($result['novo_membro']));
                foreach ($member as $item) {
                    $new_member[$i] = array('nome' => $item->name);
                    $nodes = new_member_select($item->name);
                    foreach ($nodes as $node) {
                        if($node == 'TonniAndrade')
                        $new_memeber[$i]['nodes'][] = node_load($node);
                    }
                    $i++;
                }
            }
        }
        return $new_member;
        }
    } catch (Exception $e) { return false; }}
?>
```

___________________________________________________________
___________________________________________________________

##Projetos
* [Coquetel](http://coquetel.com.br)
* [Daniel Advogados](http://www.daniel-ip.com)
* [Embratel](http://www.ideiasquemovem.com.br)
* [Embratel](http://www.embratel.com.br/50anos)
* [Instituto Ronald McDonald](https://www.institutoronalddoacao.org)
* [Instituto Trevo](http://www.institutotrevo.com.br)
* [B2W](http://www.midiakitb2w.com.br/)
* [B2W - LG](http://www.americanas.com.br/lg)
