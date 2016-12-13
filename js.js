/**
 * Created by xueweiliu on 16/12/12.
 */

    $(document).ready(
        function(){
            $('#button').click(
                function(){
                    var toAdd = $('input[name=listItem]').val();
                    if(toAdd!=''&&toAdd.trim().length){
                        $('ol').append('<li>' + toAdd + '</li>');
                    }
                });
            $('input[name=listItem]').on('keydown',function (event) {
                if(event.keyCode == 13){
                    $("#button").click();
                }
            })
            $(document).on('click','li', function(){
                $(this).toggleClass('strike');
            });
            $(document).on('dblclick','li',function () {
                $(this).fadeOut(2000);
            })
            $('input').focus(function() {
                $(this).val('');
            });
        }
    );
