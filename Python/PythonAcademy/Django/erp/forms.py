from core.models import Funcionario, Produto, Venda
from django import forms


#Formulario inclusao funcionario
class InsereFuncionarioForm(forms.ModelForm):
    chefe = forms.BooleanField(
        label="Chefe?",
        required=False,
    )
    
    biografia = forms.CharField(
        label='Biografia',
        required=False,
        widget=forms.Textarea
    )
    
    class Meta:
        model = Funcionario
        
        fields = [
            'nome',
            'sobrenome',
            'cpf',
            'tempo_de_servico',
            'remuneracao'
        ]
        
# Formulario inlusao produtos

class InsereProdutoForm(forms.ModelForm):
    descricao = forms.CharField(label='Descrição', required=True, widget=forms.Textarea)
    
    class Meta:
        model = Produto
        fields = [
            'nome',
            'descricao',
            'preco'
        ]
        
#Formulario de inclusao de vendas

class InsereVendaForm(forms.ModelForm):
    class Meta:
        model = Venda
        fields = [
            'funcionario',
            'produto'
        ]