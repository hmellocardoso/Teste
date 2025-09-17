Feature: Login no AutomationExercise

  Background:
    Given que estou na página inicial do AutomationExercise
    And acesso a tela de Login

  Scenario: Login com credenciais válidas
    When tento entrar com credenciais validas
    Then devo ver que estou autenticado

  Scenario Outline: Login com credenciais inválidas
    When tento entrar com o e-mail "<email>" e a senha "<senha>"
    Then devo ver a mensagem de erro de login

    Examples:
      | email           | senha       |
      | teste@teste.com | testeeeee   |
      | erro@teste.com  | senhaerrada |
