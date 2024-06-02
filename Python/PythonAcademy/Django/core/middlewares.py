from django.http.response import HttpResponseForbidden

#Filtra IP Middleware

class FiltraIPMiddleware:
    
    def __init__(self, get_response=None):
        self.get_response = get_response
    
    def __call__(self, request):
        response = self.get_response(request)
        
        return response
    

    def process_view(self, request, view_func, view_args, view_kwargs):
        #lista de ips autorizados
        ips_autorizados = ['127.0.0.1']
        
        #ip do usuario
        ip_usuario = request.META.get('REMOTE_ADDR')
        
        #Verifica se é um ip autorizado
        if ip_usuario not in ips_autorizados:
            return HttpResponseForbidden("IP não autorizado")
        
        # se for um IP autorizado não faz nada
        return None