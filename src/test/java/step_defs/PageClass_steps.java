package step_defs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import utils.Driver;
import utils.Screenshot;
import utils.SharedDriver;

public class PageClass_steps {
    public PageClass_steps(){

    }
    public PageClass_steps(SharedDriver sharedDriver, PageClass_steps pageClass_steps){

    }

    @Given("I Open {string}")
    public void i_Open(String website) {
        Driver.getDriver().get(website);
        Screenshot.takeScreenshot();
    }

    @When("I search for {string} keyword")
    public void i_search_for_keyword(String keyPhrase) {
        Driver.getDriver().findElement(By.name("q")).sendKeys(keyPhrase);
        Driver.getDriver().findElement(By.name("btnK")).click();
    }

    @Then("I should verify page's title")
    public void i_should_verify_page_s_title() {
        System.out.println(Driver.getDriver().getTitle());
        Screenshot.takeScreenshot();
    }

}
