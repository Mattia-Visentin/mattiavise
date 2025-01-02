<html>

    <head>

        <link rel="Stylesheet" href="Style.css">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    </head>

    <body>

        <div class="principale">

            <?php

            $wsdl_url = "http://127.0.0.1/Convertitore/server/test.wsdl";

            if ((isset($_POST['Valore']) && !empty($_POST['Valore'])&& isset($_POST['Valuta']) && !empty($_POST['Valuta']))){ 

                try {

                    $client = new SoapClient($wsdl_url,["location" =>"http://127.0.0.1/Convertitore/server/",'uri' => "urn:servizioConverti"]);

                    $valore = htmlentities($_POST['Valore']);

                    $valuta = htmlentities($_POST['Valuta']);

                    $risposta = $client->converti($valore, $valuta);

                    echo $risposta;

                } catch (SoapFault $e){

                    echo '<br>Errore nel client SOAP: ' . $e->getMessage();
                }
            }

            ?>

        </div>

    </body>

</html>