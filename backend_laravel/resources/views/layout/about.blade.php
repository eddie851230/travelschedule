{{-- 引入布局 --}}
@extends('pages/application')

@section('title','我要學好laravel')


@section('main')

  <h1>hi</h1>
    {{-- 練習if --}}
    @if(count($heroes) >0)
      @foreach($heroes as $hero)  
      {{-- @if($loop->first || $loop->last) --}}
        @if($loop->even || $loop->last)
          <li>
            <strong>
              {{$hero}}
            </strong>
          </li>

        @else
          <li>
            {{$hero}}
          </li>
        @endif
      @endforeach
  @endif

@endsection
    



