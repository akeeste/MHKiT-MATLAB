var sourceData58 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB-2/mhkit/power/quality/harmonic_subgroups.m","RawFileContents":["function harmonic_subgroups=harmonic_subgroups(harmonics,grid_freq)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%   Calculates the harmonic subgroups from the harmonics of current","%","% Parameters","% -----------","%     harmonics: structure with handles- harmonics.amplitude and harmonics.harmonic","%         harmonic amplitude with each timeseries in its own column","%","%     grid_freq: int","%         value indicating if the power supply is 50 or 60 Hz. Valid input are 50 and 60","%","% Returns","% -------","%     harmonic_subgroups: structure with handles harmonic_subgroups.amplitude and","%           harmonic_subgroups.harmonic","%","%","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","py.importlib.import_module('mhkit');","% py.importlib.import_module('numpy');","py.importlib.import_module('mhkit_python_utils');","","data = harmonics.amplitude;","","dsize=size(data);","li=py.list();","if dsize(2)>1","   for i = 1:dsize(2)","      app=py.list(data(:,i));","      li=py.mhkit_python_utils.pandas_dataframe.lis(li,app);","","   end","   data_pd=py.mhkit_python_utils.pandas_dataframe.spectra_to_pandas(harmonics.harmonic,li,int32(dsize(2)));","elseif dsize(2)==1","   data_pd=py.mhkit_python_utils.pandas_dataframe.spectra_to_pandas(harmonics.harmonic,py.numpy.array(data),int32(dsize(2)));","end","","sg_pd = py.mhkit.power.quality.harmonic_subgroups(data_pd,grid_freq);","","vals=double(py.array.array('d',py.numpy.nditer(sg_pd.values)));","sha=cell(sg_pd.values.shape);","x=int64(sha{1,1});","y=int64(sha{1,2});","vals=reshape(vals,[y,x]).';","","","harmonic_subgroups.amplitude=vals;","harmonic_subgroups.harmonic = double(py.array.array('d',py.numpy.nditer(sg_pd.index)));","",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":67,"ContinuedLine":false},"Statement":[{"LineNumber":22,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":24,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":26,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":28,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":29,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":30,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":31,"Hits":0,"StartColumnNumbers":3,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":33,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":36,"Hits":0,"StartColumnNumbers":3,"EndColumnNumbers":107,"ContinuedLine":false},{"LineNumber":37,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":38,"Hits":2,"StartColumnNumbers":3,"EndColumnNumbers":125,"ContinuedLine":false},{"LineNumber":41,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false},{"LineNumber":43,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":63,"ContinuedLine":false},{"LineNumber":44,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":45,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":46,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":47,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":50,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":51,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":87,"ContinuedLine":false}]}}