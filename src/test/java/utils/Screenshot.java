package utils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

public class Screenshot {
    public static void takeScreenshot(){
        try{
            byte[] screenshot = ((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            Driver.getScenario().embed(screenshot,"image/png");
        }catch (WebDriverException e){
            e.printStackTrace();
        }catch (ClassCastException e1){
            e1.printStackTrace();
        }
    }
}
