$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/featureFiles/PageClass.feature");
formatter.feature({
  "name": "Sample feature name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify webpages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://google.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass.feature:4)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for \"selenium\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_search_for_keyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify all webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.step({
  "name": "I Open \"https://google.com\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I search for \"\u003csearchKeyword\u003e\" keyword",
  "keyword": "When "
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchKeyword"
      ]
    },
    {
      "cells": [
        "Java"
      ]
    },
    {
      "cells": [
        "Selenium"
      ]
    },
    {
      "cells": [
        "API"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify all webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://google.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for \"Java\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_search_for_keyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://google.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for \"Selenium\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_search_for_keyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://google.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for \"API\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_search_for_keyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/resources/featureFiles/PageClass2.feature");
formatter.feature({
  "name": "Sample feature name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify all web pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.step({
  "name": "I Open \"\u003cbrowserName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName"
      ]
    },
    {
      "cells": [
        "https://amazon.com"
      ]
    },
    {
      "cells": [
        "https://yahoo.com"
      ]
    },
    {
      "cells": [
        "https://cnn.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify all web pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://amazon.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://amazon.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass2.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all web pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://yahoo.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://yahoo.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass2.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all web pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TagOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://cnn.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.fail(Assert.java:103)\n\tat step_defs.PageClass_steps.i_Open(PageClass_steps.java:24)\n\tat ✽.I Open \"https://cnn.com\"(file:///Users/kuba/Projects/Coding%20Projects/TLA/CucumberBDD-TestNG/src/main/resources/featureFiles/PageClass2.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_steps.i_should_verify_page_s_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});