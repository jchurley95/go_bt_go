class Api::HousesController < ApplicationController
    def index
        @houses = House.all 
        render json: @houses
    end
  
    def show
        @house = House.find params[:id]
        render json: @house
    end

    def create
        @house = House.create(house_params)
        redirect_to api_house_path(@house)
    end

    def update
        @house = House.find params[:id]
        @house.update(house_params)
        redirect_to api_house_path(@house)
    end

    def destroy
        @house = House.find(params[:id])
        @house.destroy
        redirect_to api_houses_path
    end
    
    private
    def house_params
        params.require(:house).permit(:name, :description, :picture_url, :points, :house_of_the_month?, :house_of_the_year?, :house_motto, :house_mascot, :house_color, :house_saint, :house_motto, :house_motto_latin, :saint_feast_day, :house_director_name)
    end
end
