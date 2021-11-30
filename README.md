# Sensor your music

## 如何執行
1. 準備環境

* 請在電腦上先安裝 node
 (mac使用者請在terminal打`brew install node`)
* `npm i`

2. 執行程式

    `npm start`
    應該要看到以下的畫面
    ```
    [Webserver] Listening on 3006
    [ws] Listening on 3005
    ```
3. 打開pd

    udpRecvExample.pd
    ![](https://i.imgur.com/Wb50Qpm.png)

4. 打開瀏覽器 [http://localhost:3006/](http://localhost:3006/)

    ![](https://i.imgur.com/NPxKDOU.png)

    按下 `Create Call(offer)` 來建立連線，之後會出現qrcode

    ![](https://i.imgur.com/sakJcsC.png)

    
5. 請使用平板或手機去掃 網頁上的qrcode

    掃完後，手機或平板的網頁上應該要顯示 connected to server (在綠色按鈕上面)

    ![](https://i.imgur.com/gLbaTcF.jpg)

    之後下綠色按鈕，（請同意網頁使用sensor），數字就會開始動

    ![](https://i.imgur.com/Tgj9P1j.jpg)

    此時回去看pd的console，有會看到數字一直進來

    ![](https://i.imgur.com/bfKn55l.png)

    而pd的unpack應該要可以正確拆解每個數字

    ![](https://i.imgur.com/LfC1JYD.png)

    可以試著選轉手機會平板，應該會有頻率的變化

## 注意事項

* 如果連線斷掉，請把筆電的網頁重新整理，然後重 第4步開始

* 筆電上開一個網頁，就只能和一個裝置配對

* 目前尚未支援多個裝置，多個裝置的訊息會雜在一起

* 此專案是透過webrtc技術，裝置和電腦不局限於內網內，但兩者之間連線頻寬越好，效果越好

    