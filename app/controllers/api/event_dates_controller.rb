class Api::EventDatesController < ApplicationController
  def index
    @event_dates = EventDate.all 
    render json: @event_dates
  end

  def show
      @event_date = EventDate.find params[:id]
      render json: @event_date
  end

  def edit
  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def event_date_params
  end
end
