Feature: Sample feature name

  @TagOne
  Scenario Outline: Verify all web pages
    Given I Open "<browserName>"
    Then I should verify page's title
    Examples:
      | browserName        |
      | https://amazon.com |
      | https://yahoo.com  |
      | https://cnn.com    |