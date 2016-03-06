class ArticlesController < ApplicationController

  def new
    
  
  end
  def create
    @article = Article.new(params.require(:article).permit(:zdata,:cdata))
    @article.save
    redirect_to @article
  end

  def show
    @article = Article.find(params[:id])
    @zipdata=@article.zdata
    @cntrydata=@article.cdata
    source="http://api.openweathermap.org/data/2.5/weather?zip="+@zipdata+","+@cntrydata+"&appid=1c3eb001ed0befb43072cc61150f232a" 
    resp=Net::HTTP.get_response(URI.parse(source))
    data=resp.body
    @data_hash=JSON.parse(data)
    @sys=@data_hash['sys']
    @main=@data_hash['main']
    @weath=@data_hash['weather']
    @temp_min=(@main['temp_min']-273).round
    @temp_max=(@main['temp_max']-273 ).round   
    wind=(@data_hash['wind']['deg']).to_i
    
    source="http://api.openweathermap.org/data/2.5/forecast?id="+((@data_hash['id']).to_s)+"&appid=1c3eb001ed0befb43072cc61150f232a" 
    resp=Net::HTTP.get_response(URI.parse(source)) 
    flist=resp.body
    @five_hash=JSON.parse(flist)
    @list=@five_hash['list']


    if wind>348.75 and wind<360.0 or wind>0.0 and wind< 11.25 
      @direction ='N'
    elsif wind>11.25 and wind<33.75
      @direction = 'NNE'
    elsif wind>33.75 and wind<56.25
      @direction = 'NE'
    elsif wind>56.25 and wind<78.75
      @direction = 'ENE'
    elsif wind>78.75 and wind<101.25
      @direction = 'E'
    elsif wind>101.25 and wind<123.75
      @direction = 'ESE'
    elsif wind>123.75 and wind<146.25
      @direction = 'SE'
    elsif wind>146.25 and wind<168.75
      @direction = 'SSE'
    elsif wind>168.75 and wind<191.25
      @direction = 'S'
    elsif wind>191.25 and wind<213.75
      @direction = 'SSW'
    elsif wind>213.75 and wind<236.25
      @direction = 'SW'
    elsif wind>236.25 and wind<258.75
      @direction = 'WSW'
    elsif wind>258.75 and wind<281.25
      @direction = 'W'
    elsif wind>281.25 and wind<303.75
      @direction = 'WNW'
    elsif wind>303.75 and wind<326.25
      @direction = 'NW'
    elsif wind>326.25 and wind<348.75
      @direction = 'NNW'
    end
    



  end

  def maps

  end


 
end
