function calcular() {

                /* Cálculo padrão: 

                cálculo = (490,00 * 12) - (99,00 * 12)

                490,00 = Valor que a empresa paga atualmente de contabilidade
                12 = Corresponde ao números de meses (No caso 1 ano)
                99,00 = Mensalidade que a empresa pagaria com a Contify
                
                resultado = R$ 4692,00

                */

                var vlr_faturamento = ($('#vlr_faturamento').val());
                
                if (vlr_faturamento == '1'){
                    vlr_mensalidade = 99;
                } else if (vlr_faturamento == '2'){
                    vlr_mensalidade = 129;
                } else if (vlr_faturamento == '3'){
                    vlr_mensalidade = 169;
                } else if (vlr_faturamento == '4'){
                    vlr_mensalidade = 199;
                } else if (vlr_faturamento == '5'){
                    vlr_mensalidade = 249;
                } else if (vlr_faturamento == '6'){
                    vlr_mensalidade = 299;
                }

                var vlr_contab            = parseInt(document.getElementById('vlr_cont').value, 10);
                var socio                 = parseInt(document.getElementById('socio').value, 10);
                var funcionario           = parseInt(document.getElementById('funcionario').value, 10);
                var vlr_total_socio       = 0;
                var vlr_total_funcionario = 0;

                // até 2 sócios é gratuito, não tem acréscimo de valor
                if (socio > 2){          
                    socio = socio - 2;
                    vlr_total_socio = socio * 30; 
                }

                //  Para cada funcionário, agregar R$ 30,00 na mensalidade
                if (funcionario > 0){
                    vlr_total_funcionario = funcionario * 30; 
                }

                // Valor da Mensalidade
                vlr_mensalidade = vlr_mensalidade + vlr_total_socio + vlr_total_funcionario;               
                document.getElementById('resultado').innerHTML = (vlr_contab * 12) - (vlr_mensalidade * 12);
                element = document.getElementById('resultado').innerHTML;
                document.getElementById('vlr_mensalidade').innerHTML = vlr_mensalidade;

                // Se retornou NaN, atribui 0
                if (element == 'NaN'){
                    document.getElementById('resultado').innerHTML = '0';
                }

                // Se valor menor que 0, atribui 0
                if (element < 0){
                    document.getElementById('resultado').innerHTML = '0';
                }
            }