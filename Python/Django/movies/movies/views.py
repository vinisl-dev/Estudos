from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404
from .models import Movie


def movies(request):
    data = Movie.objects.all()
    return render(request, 'movies/movies.html', {'movies':data})


def home(request):
    return HttpResponse('home page')

def detail(request, id):
    data = Movie.objects.get(pk = id)
    return render(request,  'movies/detail.html', {'movie':data})

def add(request):
    title = request.POST.get('title')
    year = request.POST.get('year')

    if title and year:
         movie = Movie(title=title, year=year)
         movie.save()
         return HttpResponseRedirect('/movies')
    return render (request, 'movies/add.html')

def delete(request, id):
    try:
        movie = Movie.objects.get(pk = id)
    except:
        raise Http404('Movie does not exist')
    movie.delete()
    return HttpResponseRedirect('/movies')


def update(request, id):

    # recupera o filme com id
    movie = get_object_or_404(Movie, pk=id)
    #verifica se o metodo usado é do tipo POST
    if request.method == 'POST':
        title = request.POST.get('title')
        year = request.POST.get('year')
        if title and year:
            movie.title = title
            movie.year = year
            movie.save()
            return HttpResponseRedirect('/movies')
        else:
            
            return render(request, 'movies/update.html',{'movie': movie})
    
    # GET request - Exibe o formulário com os dados do filme atual
    return render(request, 'movies/update.html', {'movie': movie})