# Micro-serviço com nodejs

  - Utilizando Kafka;
  - Utilizando Node;

# Aplicações

  - API principal (Station);
  - Geração de certificado;

# Fluxo da aplicação

  - API principal envia uma mensagem para o serviço de certificado para gerar o certificado;
  - Micro-serviço de certificado devolve uma resposta (sincrona/assincrona);
  
  Se conseguir sincrona/assincrona:

  - Receber uma resposta desincrona do quando o e-mail com o certificado foi enviado;