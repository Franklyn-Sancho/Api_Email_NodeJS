<h1 align="center"> NPS API </h1>

Antes de tudo precisamos explicar o que é o NPS, abreviação de net promoter score. é o calculo de satisfação do cliente, neste contexto, podemos relembrar aqueles emails a qual as empresas nos perguntam o quão satisfeitos estamos com os serviços prestados. Por exemplo: "Vote 0 se estiver totalmente instisfeito e 10 se estiver totalmente satisfeito." Esta API construída em nodeJS e TypeScript faz o calculo do NPS via Email.

Para os testes, além de executar o servidor, também será necessário o uso do POSTMAN ou INSONMIA para chamar o get, post, delete e patch, caso necessário. Encorajo o uso do INSONMIA por ser Open Source. 

### Tecnologias 

além dos já mencionados <strong>NODEJS</strong> e <strong>TypeScript</strong>, também temos:  

* <strong>Express</strong> para aprimorar a nossa aplicação, 
* o <strong>Handlerbars</strong> para o template, 
* o módulo <strong>nodemailer</strong> para o envio de email, 
* o <strong>sqlite3</strong> como banco de dados e o <strong>typeorm</strong> para fortacelecer o nosso banco. 
* Agora para as nossas validações trabalhamos com a dependência <strong>yup</strong>. 
* As funções da nossa API foram testadas com o <strong>jest</strong>, o <strong>supertest</strong> e o <strong>ts-jest</strong> para o typescript.



