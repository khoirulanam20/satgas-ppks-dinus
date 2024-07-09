import React from 'react';
import coverImage from '../assets/cover.jpg';

const Pengantar = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 my-5">
      <h1 className="text-2xl font-bold mb-8 text-center">Pengantar</h1>
      <section
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
    </section>

      <section className="p-10">
        
        <h2 className="text-2xl font-bold mb-4">Deskripsi</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ex nec felis faucibus ullamcorper. Ut
          hendrerit nunc ac eros euismod, eget fermentum ipsum consequat. Duis vehicula suscipit odio, nec dignissim
          odio sagittis et. Sed accumsan massa nec consequat ultrices. Nulla facilisi. Nam vel leo nec tellus iaculis
          rutrum sed at erat. Vestibulum consequat lectus sed leo pretium varius. Vestibulum dapibus felis eu est
          finibus luctus. Donec interdum nisl vel lectus vestibulum lobortis. Proin tincidunt justo quis enim
          lobortis, a tincidunt lorem vehicula. Vivamus laoreet urna nisl, id aliquet nisl fermentum in. Sed id
          pharetra turpis. Nullam fermentum velit non volutpat sagittis. Sed vitae erat vel lorem aliquam faucibus
          vitae eu mauris. Nullam convallis risus in ultricies tempus. Quisque sit amet lacus vel arcu ultrices
          rutrum ac non augue. Nullam efficitur bibendum tellus, id tristique mi tempor ac. In ultricies vehicula
          urna, nec consequat risus tristique ac. Vivamus non arcu velit. Quisque sit amet ex id purus elementum
          consectetur. Etiam nec lacus ut enim tristique viverra non eget justo. Pellentesque fermentum, elit vel
          tincidunt condimentum, libero dolor ullamcorper justo, nec aliquam metus mi ut lectus. Phasellus eget dui
          leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus varius volutpat est, a tincidunt dui posuere eget. Sed eu congue risus. Aliquam non tellus vitae
          mi lacinia efficitur. Aenean nec condimentum lorem. Aliquam erat volutpat. Duis eleifend elementum mi, vel
          aliquam nisi finibus nec. Curabitur et libero urna. Nam at congue ipsum. Pellentesque ut nunc erat.
          Integer sit amet nisl at nisi ultrices fermentum at ac lorem. Duis ultrices, sem sit amet scelerisque
          dapibus, leo turpis facilisis ipsum, sit amet finibus eros ligula eu leo. Nulla euismod odio eget congue
          elementum.
        </p>
      </section>
    </div>
  );
};

export default Pengantar;
