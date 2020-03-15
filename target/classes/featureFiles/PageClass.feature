Feature: Sample feature name
  @TagOne
  Scenario: Verify webpages
    Given I Open "https://google.com"
    When I search for "selenium" keyword
    Then I should verify page's title


    @TagOne
   Scenario Outline: Verify all webpages
     Given I Open "https://google.com"
     When I search for "<searchKeyword>" keyword
     Then I should verify page's title
     Examples:
     |searchKeyword|
     |Java         |
     |Selenium     |
     |API          |