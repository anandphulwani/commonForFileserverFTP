/**
 * Created by chuang on 11/14/13.
 */
var a = document.getElementById('ext-page-link');
a.addEventListener('click',function(){
    chrome.tabs.create({url:'chrome://extensions/?id=' + chrome.runtime.id});
});